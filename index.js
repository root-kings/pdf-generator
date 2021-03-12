const pdfGenerator = require('template-pdf-generator')
const fs = require('fs-extra')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

module.exports = async function generatePDF(
  templateNameOrData,
  data,
  outputFilePath
) {
  let template

  if (typeof templateNameOrData == 'string') {
    let templatePath = path.join(__dirname, 'templates', templateNameOrData)
    template = require(templatePath)
  } else {
    template = templateNameOrData
  }

  let outputPath = outputFilePath
    ? outputFilePath
    : path.join('out', uuidv4() + '.pdf')

  try {
    fs.ensureFileSync(outputPath)
    await pdfGenerator(
      data,
      template.body,
      template.styles,
      template.options
    ).pipe(fs.createWriteStream(outputPath))

    return outputPath
  } catch (err) {
    throw new Error(err)
  }
}
