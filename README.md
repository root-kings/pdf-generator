# pdf-generator

You need to install `wkhtmltopdf` from [https://wkhtmltopdf.org/downloads.html#stable](https://wkhtmltopdf.org/downloads.html#stable)

## Usage

```sh
npm i @root-kings/pdf-generator
```

```js
const generatePDF = require('@root-kings/pdf-generator')

let outputPath = await generatePDF(templateName, data)

let outputPath = await generatePDF(templateData, data)

let outputPath = await generatePDF(template, data, outputFilePath)
```

## Examples

Please check `tests/index.js`.

## TODO

- [ ] Error Handling
- [ ] Add validation
