const vscode = require('vscode');
const axios = require('axios');
const { buildApiIndex } = require('./apiIndex');

let apiIndex = null;

function activate(context) {
    console.log('EasyDA IntelliSense activated at', new Date().toLocaleString('en-NZ'));

    // Initialize API index
    const jsonPath = 'd:\\easyeda\\resources\\easyda-api.json';
    const dtsPath = 'd:\\easyeda\\resources\\easyda-api.d.ts';
    buildApiIndex(jsonPath, dtsPath).then(index => {
        apiIndex = index;
        console.log(`API index loaded: ${index.types.length} types`);
    });

    // Command to ask questions
    let disposable = vscode.commands.registerCommand('easyda.askQuestion', async () => {
        if (!apiIndex) {
            vscode.window.showErrorMessage('API index not loaded.');
            return;
        }

        const quickPick = vscode.window.createQuickPick();
        quickPick.placeholder = 'Ask about EasyDA API (e.g., How to select a component?)';
        quickPick.canSelectMany = false;

        quickPick.onDidChangeValue(value => {
            if (value.length < 3) {
                quickPick.items = [];
                return;
            }
            const suggestions = generateSuggestions(value, apiIndex);
            quickPick.items = suggestions.map(s => ({
                label: s,
                description: 'Suggested question'
            }));
        });

        quickPick.onDidAccept(async () => {
            const query = quickPick.selectedItems[0]?.label || quickPick.value;
            if (query) {
                let answer = generateAnswer(query, apiIndex);
                if (!answer.answer.includes('No relevant')) {
                    showAnswer(query, answer);
                } else {
                    // Fallback to AI
                    try {
                        const response = await axios.post('http://localhost:8000/ask', { text: query });
                        answer = response.data;
                        showAnswer(query, answer);
                    } catch (e) {
                        vscode.window.showErrorMessage(`AI server error: ${e.message}`);
                    }
                }
            }
            quickPick.hide();
        });

        quickPick.show();
    });

    context.subscriptions.push(disposable);
}

function generateSuggestions(query, index) {
    const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length > 3);
    const suggestions = new Set();

    const templates = [
        'How to select a component from a schematic document',
        'How to get all components in a schematic',
        'How to highlight a component in the editor',
        'How to access schematic document properties'
    ];

    templates.forEach(t => {
        if (keywords.some(k => t.toLowerCase().includes(k))) {
            suggestions.add(t);
        }
    });

    index.types.forEach(t => {
        if (keywords.some(k => t.name.toLowerCase().includes(k) || t.description.toLowerCase().includes(k))) {
            suggestions.add(`How to use ${t.namespace}.${t.name}`);
        }
    });
    index.methods.forEach(m => {
        if (keywords.some(k => m.name.toLowerCase().includes(k) || m.description.toLowerCase().includes(k))) {
            suggestions.add(`How to use ${m.type}.${m.name}()`);
        }
    });

    return Array.from(suggestions).slice(0, 10);
}

function generateAnswer(query, index) {
    const keywords = query.toLowerCase().split(/\s+/);
    let bestMatch = null;
    let bestScore = 0;

    index.types.forEach(t => {
        let score = 0;
        if (t.namespace === 'SchematicSymbol') score += 3;
        score += keywords.reduce((s, k) => s + (t.name.toLowerCase().includes(k) || t.description.toLowerCase().includes(k) ? 1 : 0), 0);
        if (keywords.includes('component')) score += 2;
        if (keywords.includes('schematic')) score += 2;
        if (score > bestScore) {
            bestMatch = { ...t, kind: 'type' };
            bestScore = score;
        }
    });

    index.methods.forEach(m => {
        let score = 0;
        if (m.namespace === 'SchematicSymbol') score += 3;
        score += keywords.reduce((s, k) => s + (m.name.toLowerCase().includes(k) || m.description.toLowerCase().includes(k) ? 1 : 0), 0);
        if (keywords.includes('component')) score += 2;
        if (keywords.includes('schematic')) score += 2;
        if (score > bestScore) {
            bestMatch = { ...m, kind: 'method' };
            bestScore = score;
        }
    });

    if (!bestMatch) {
        return {
            answer: 'No relevant API methods found.',
            sources: []
        };
    }

    if (bestMatch.kind === 'method' && bestMatch.name === 'getComponents' && bestMatch.type.includes('Schematic')) {
        return {
            answer: `To select a component from a schematic document, use \`${bestMatch.namespace}.ISCH_Schematic.getComponents()\` to retrieve components, then select one using \`${bestMatch.namespace}.SCH_SelectControl.select()\`.\n\n` +
                    '```javascript\n' +
                    'const schematic = // Get ISCH_Schematic, e.g., via DocumentTree.DMT_EditorControl\n' +
                    'const components = schematic.getComponents();\n' +
                    'const resistor = components.find(comp => comp.designator === "R1");\n' +
                    'if (resistor) {\n' +
                    '    const selectControl = new SchematicSymbol.SCH_SelectControl();\n' +
                    '    selectControl.select(resistor);\n' +
                    '}\n' +
                    '```',
            sources: [`${bestMatch.namespace}.${bestMatch.type}.${bestMatch.name}`, bestMatch.link || '']
        };
    }

    return {
        answer: `Use \`${bestMatch.namespace}.${bestMatch.name}\`. Description: ${bestMatch.description || 'No description.'}`,
        sources: [bestMatch.name, bestMatch.link || '']
    };
}

async function showAnswer(query, { answer, sources }) {
    const panel = vscode.window.createWebviewPanel(
        'easydaAnswer',
        `Answer: ${query}`,
        vscode.ViewColumn.One,
        {}
    );
    panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <body>
            <h2>${query}</h2>
            <pre>${answer}</pre>
            <p><strong>Sources:</strong> ${sources.join(', ')}</p>
        </body>
        </html>
    `;
}

function deactivate() {}

module.exports = { activate, deactivate };