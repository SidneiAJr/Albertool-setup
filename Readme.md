# Albertool Setup — README

> Made by [albertaodasmassa](https://www.npmjs.com/~albertaodasmassa)

## Overview

**Albertool Setup** is a single-command installer for the Albertool + DarkStar ecosystem. Instead of installing each package manually, run one command and get your entire development environment ready to go.

> **Note:** Constellation CLI targets **backend** project generation only — it is not a full-stack generator.

## What's Included

| Package | Description |
| --- | --- |
| `@darkstar-cli/core` | Core module of the DarkStar Laravel-style Node.js/TypeScript framework |
| `@darkstar-cli/orm` | DarkStar's built-in ORM for database interactions |
| `@darkstar-cli/cli` | Command-line interface for scaffolding DarkStar projects |
| `albertool-basic` | Lightweight toolkit for proof-of-concept apps with basic routing |
| `constellation-cli-albertool` | CLI for generating backend project structures (folders and files) organized by architecture pattern and language |

## Installation

```bash
npx albertool-setup
```

Or install globally and run anytime:

```bash
npm install -g albertool-setup
albertool-setup
```

The installer will go through each package one by one. If a package fails, it is skipped and listed at the end so you can install it manually.

### Manual install (individual packages)

```bash
npm install -g @darkstar-cli/core @darkstar-cli/orm @darkstar-cli/cli albertool-basic constellation-cli-albertool
```

### Requirements

- Node.js 18 or higher
- npm

## Roadmap

The following packages are planned for future releases | Next project

- **Albertool Plange** — coming soon
- **Albertool Model** — JSON and XML model generation support

