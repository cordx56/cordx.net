const ghpages = require('gh-pages')

ghpages.publish('./dist', {
  branch: 'master',
  user: {
    name: 'Kaoru Chisen',
    email: 'cordx56@cordx.net'
  },
  message: 'Web page AUTO UPDATE [ci skip]'
}, function (err) {
  if (err) {
    console.log(err)
    process.exit(1)
  } else {
    console.log('Successfully Updated!')
  }
})
