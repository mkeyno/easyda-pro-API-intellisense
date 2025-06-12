const vscode = require('vscode');

/**
 * Activates the extension.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('EasyDA IntelliSense extension activated');
}

/**
 * Deactivates the extension.
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};