var express = require('express')
var Parse = require('parse/node').Parse;

var app = express()


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response) {
  var items = ["a","e","i","o","u"]
  var item = items[Math.floor(Math.random()*items.length)];
  response.send(item)
})

Parse.initialize(process.env.APPLICATION_ID,"", process.env.MASTER_KEY);
Parse.serverURL = process.env.PUBLIC_SERVER_URL;
Parse.Cloud.useMasterKey();
console.log("MY LOG" + Parse);
console.log("APPID " + process.env.APPLICATION_ID)
console.log("MASTERY KEY " + process.env.MASTER_KEY)
setInterval(function() { 
  Parse.Cloud.run('updateRecurringSessions', {}, {
					  success: function(success) {
					   console.log("Sent" + error)
					  },
					  error: function(error) {
					  	console.log("Error " + error.message)
					  }
					});
   }, 5 * 60000)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
