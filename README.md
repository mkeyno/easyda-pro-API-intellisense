# EasyDA IntelliSense

Provides IntelliSense support for the EasyDA Professional API in Visual Studio Code.

## Features

- Autocompletion for EasyDA API types across six namespaces: `System`, `DocumentTree`, `SchematicSymbol`, `PCBFootprint`, `Panel`, and `IntegratedLibrary`.
- JSDoc comments for classes, interfaces, enumerations, primitives, and type aliases, with translated English descriptions.
- Supports JavaScript and TypeScript files.

## About

This extension was developed by **Mehrdad Keyno** (GitHub: [mkeyno](https://github.com/mkeyno)) under the organization [Keyno General Contracting](https://www.keyno-gc.co.nz). The information was collected from the main Chinese online documentation at [EasyEDA Professional API Reference](https://prodocs.easyeda.com/en/api/reference/). The Chinese descriptions were translated into English to create this extension, which is offered for **free usage** to support the EasyDA community.

## Installation

1. Install the extension via the VS Code Extensions view using the `.vsix` file.
2. Open a `.js` or `.ts` file to use IntelliSense.

## Usage

Type `System.`, `DocumentTree.`, etc., to access API types. For example:

```javascript
System.SYS_ClientUrl.request // Shows method signature and documentation
DocumentTree.IDMT_BoardItem // Shows interface properties
SchematicSymbol.ESCH_PrimitiveType // Shows enum values