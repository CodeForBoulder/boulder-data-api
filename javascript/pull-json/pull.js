const axios = require('axios')
const fs = require('fs')


function writeData(dest, data) {
  fs.writeFile(dest, JSON.stringify(data, null, 2), err => {
    if(err) console.log(err)
    console.log('You can find the json at: ' + dest)
  })
}

// I assume the arguement is one of the get actions e.g. package_list, or revision_list
if(process.argv.length == 3) {
  let endpoint = process.argv[2],
    destination = './results/' + endpoint + '.json'

  axios.get('https://opendata.bouldercolorado.gov/api/3/action/' + endpoint)
    .catch(err => console.log('Axios failed to fetch json. Error: ', err))
    .then(response => {
      if(response.status == 200) {
        writeData(destination, response.data)
      } else {
        console.log('response.status = ' + response.status)
      }
    })
} else {
  console.log('this script requires an action name')
}
