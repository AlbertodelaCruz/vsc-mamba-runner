// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Static class that creates and holds a reference to a terminal and can run commands in it.
class Term {
    static termName: string = 'mamba-runner';
    static term?: vscode.Terminal;

    static _term() {
        if (!Term.term) {
            Term.term = vscode.window.createTerminal(Term.termName);
            Term.term.show(true);
            // if user closes the terminal, delete our reference:
            vscode.window.onDidCloseTerminal((event) => {
                if (event.name === Term.termName) {
                    Term.term = undefined;
                }
            });
        }
        return Term.term;
    }

    static async run(command: string) {
        Term._term().show();
        // clear text in current terminal
        vscode.commands.executeCommand('workbench.action.terminal.clear');
		// wait 2 second before running command to load virtualenv
		await new Promise(r => setTimeout(r, 2000));
        Term._term().sendText(command, true);
    }

    static dispose() {
        if (Term._term()) {
            Term._term().dispose();
        }
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let testDisposable = vscode.commands.registerCommand('mamba.runTest', () => {
		runSingleTest();
	});
    let unitTestsDisposable = vscode.commands.registerCommand('mamba.runUnitTests', () => {
		runUnitTests();
	});

	context.subscriptions.push(testDisposable);
    context.subscriptions.push(unitTestsDisposable);
}

async function runSingleTest() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor');
        return;
    }
    const res = editor!.document.uri;
    
    let command = `mamba -f documentation ${res.path}`;
    runCommand(command);
}

async function runUnitTests() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showWarningMessage('No active editor');
        return;
    }
    const res = editor!.document.uri;
    const projectFolder = vscode.workspace.getWorkspaceFolder(res)!.uri.fsPath;
    
    let command = `mamba $(find ${projectFolder} -type d -name specs)`;
    runCommand(command);
}

export function runCommand(cmd: string) {
    if (!cmd) {
        vscode.window.showErrorMessage(`Command not found.`);
        return;
    }
    Term.run(cmd);
}

// this method is called when your extension is deactivated
export function deactivate() {}