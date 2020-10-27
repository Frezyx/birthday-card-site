let express = require('express')
let app = express()
let fs = require("fs");

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(fs.readFileSync('./public/index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at port" + app.get('port'))
})
