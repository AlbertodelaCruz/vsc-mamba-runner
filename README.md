# mamba-runner

This `vscode` extension allows you to run test (*in a very quick way*) in your 🐍 `python` codebase using [`mamba`](https://github.com/nestorsalceda/mamba) test runner.

> NOTE: this is an early stage project. Please open an issue or, even better, a PR if you find it interesting and you wanna improve `mamba-runner`.

![cmd-palette](https://raw.githubusercontent.com/AlbertodelaCruz/vsc-mamba-runner/main/doc/images/mamba-runner.gif)


## Motivation

Mamba is a BDD (Behavior-drive development) test runner for python. I love it because it is easy to express tests in an human-readable way.
I started using Visual Code and there was no way to execute this runner so I started working on it.

Look at the usage section for more details.

## Requirements

You need to have a python `virtualenv` with `mamba` package installed and set into your project.

## Usage

You need to have an opened test file in the editor.

At this moment. There is only 2 commands available:
- `Mamba Run Test`
- `Mamba Run Unit Tests`

You can run them using the `VSCode` command palette (`⇧⌘P` or `ctr⇧P`).

## Release Notes

### 0.0.1

- First `mamba-runner` release.
