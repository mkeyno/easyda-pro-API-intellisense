const fs = require('fs').promises;

async function buildApiIndex(jsonPath, dtsPath) {
    const index = { types: [], methods: [], properties: [] };
    try {
        const jsonContent = await fs.readFile(jsonPath, 'utf-8');
        const jsonData = JSON.parse(jsonContent).Reference || {};
        for (const namespace in jsonData) {
            for (const category in jsonData[namespace]) {
                for (const itemName in jsonData[namespace][category]) {
                    const item = jsonData[namespace][category][itemName];
                    item.name = itemName;
                    index.types.push({
                        namespace,
                        category,
                        name: item.name,
                        description: item.description || '',
                        url: item.url || '',
                        inherent: item.Inherent || []
                    });
                    (item.Inherent || []).forEach(inh => {
                        if (inh.Method) {
                            index.methods.push({
                                type: item.name,
                                namespace,
                                name: inh.Method,
                                description: inh.Description || '',
                                link: inh.Link || ''
                            });
                        } else if (inh.Property) {
                            index.properties.push({
                                type: item.name,
                                namespace,
                                name: inh.Property,
                                description: inh.Description || '',
                                link: inh.Link || ''
                            });
                        }
                    });
                }
            }
        }
    } catch (e) {
        console.error(`Error parsing JSON: ${e}`);
    }
    try {
        const dtsContent = await fs.readFile(dtsPath, 'utf-8');
        const interfacePattern = /interface\s+(\w+)\s*\{([^}]*)\}/gs;
        let match;
        while ((match = interfacePattern.exec(dtsContent))) {
            const name = match[1];
            const body = match[2];
            const members = [];
            const memberPattern = /(\w+)\s*:\s*([^;]+);(?:\s*\/\*\*\s*([^*]+)\*\/)?/g;
            let memberMatch;
            while ((memberMatch = memberPattern.exec(body))) {
                members.push({
                    name: memberMatch[1],
                    type: memberMatch[2].trim(),
                    doc: memberMatch[3]?.trim() || ''
                });
            }
            index.types.push({
                namespace: 'Unknown',
                category: 'Interfaces',
                name,
                description: members.map(m => m.doc).join(' ') || '',
                members
            });
            members.forEach(m => {
                if (m.type.includes('(')) {
                    index.methods.push({
                        type: name,
                        namespace: 'Unknown',
                        name: m.name,
                        description: m.doc
                    });
                } else {
                    index.properties.push({
                        type: name,
                        namespace: 'Unknown',
                        name: m.name,
                        description: m.doc
                    });
                }
            });
        }
    } catch (e) {
        console.error(`Error parsing .d.ts: ${e}`);
    }
    return index;
}

module.exports = { buildApiIndex };