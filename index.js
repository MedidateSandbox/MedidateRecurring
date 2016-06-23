var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response) {
  var items = ["a","e","i","o","u"]
  var item = items[Math.floor(Math.random()*items.length)];
  response.send(item)
})

setInterval(function() { 
  var items = ["Aram","Please","Help"]
  var item = items[Math.floor(Math.random()*items.length)]
  console.log(item) }, 5000)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
