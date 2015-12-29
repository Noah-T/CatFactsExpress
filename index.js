
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var client = require('twilio')('AC3d37b29e1c0298b173fa664def68d6b3', 'a7da04243f818270c75f7440744532f0');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello Dude!');
});

app.get('/test', function (req, res) {
  res.send('Hello test!');
});

app.post('/test', function (req, res) {
  debugger;
  console.log("her's the req" + req);
   var phoneNumber = req.body.phoneNumber.replace(/[^0-9]/g, '');
  console.log("about to send to : " + phoneNumber);
  console.log(" this is request body: " + req.body);  
  res.json(req.body.data);

  client.sendMessage({
    //strip out everything except for numbers
    to:'+1' + phoneNumber, // Any number Twilio can deliver to
    from: '+16172064311', // A number you bought from Twilio and can use for outbound communication
    body: "I'll only send you 100-200 messages a day about my cats?" // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any
        
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});
  // res.json(req.body);
  // console.log("request body: " + req.body);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});









