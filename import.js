const contentfulImport = require('contentful-import')

const options = {
  content: {

  },
  spaceId: 'g78w26mus04v',
  managementToken: 'CFPAT-dSMmvVYgvbmQ3Gdb_yN15z3ZihP21X0YOp4q4zY3oiw'
}

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully')
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })