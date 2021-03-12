const generatePDF = require('../index')

async function test() {
  let output

  // inbuilt template
  output = await generatePDF('examples/test', { name: 'World' })
  console.log('Generated file:', output)

  // given template
  output = await generatePDF(
    {
      body: '<h1>Hello {{name}}!</h1>',
      styles: 'h1 {color: blue}'
    },
    { name: 'World' }
  )
  console.log('Generated file:', output)

  // custom output
  output = await generatePDF(
    {
      body: '<h1>Hello {{name}}!</h1>',
      styles: 'h1 {color: green}'
    },
    { name: 'World' },
    'out/custom/test.pdf'
  )
  console.log('Generated file:', output)
}

test()
