# mamba-runner

![ci](https://github.com/AlbertodelaCruz/vsc-mamba-runner/workflows/CI/badge.svg?branch=main) ![vs](https://vsmarketplacebadge.apphb.com/version-short/acgri82.mamba-runner.svg) ![vs-d](https://vsmarketplacebadge.apphb.com/installs/acgri82.mamba-runner.svg) ![dow](https://vsmarketplacebadge.apphb.com/downloads/acgri82.mamba-runner.svg) ![rating](https://vsmarketplacebadge.apphb.com/rating-star/acgri82.mamba-runner.svg)

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

Once you have run tests, a status bar icon will appear at the botton right (💻▶)

## Credits

A good starting point is [official documentation](https://code.visualstudio.com/api)
This repo is highly inspired in [pytest-runner](https://github.com/ernestoarbitrio/pytest-runner) from Ernesto Arbitrio
