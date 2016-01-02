var catFacts = [
'Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.',
'There are cats who have survived falls from over 32 stories (320 meters) onto concrete.',
'A group of cats is called a clowder.',
'Cats have over 20 muscles that control their ears.',
'Cats sleep 70% of their lives.',
'A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.',
'A cat ran for mayor of Mexico City in 2013.',
'In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.',
'When cats grimace, they are usually “taste-scenting.” They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.',
'Cats can’t taste sweetness.',
'Owning a cat can reduce the risk of stroke and heart attack by a third.',
'Wikipedia has a recording of a cat meowing because why not?',
'The world’s largest cat measured 48.5 inches long.',
'Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt’s pharaohs.',
'A cat’s purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.',
'Similarly, the frequency of a domestic cat’s purr is the same at which muscles and bones repair themselves.',
'Adult cats only meow to communicate with humans.',
'The world’s richest cat is worth $13 million after his human passed away and left her fortune to him.',
'Your cat recognizes your voice but just acts too cool to care (probably because they are).',
'Cats are often lactose intolerant, so stop givin’ them milk!',
'Basically all cartoon cats lied to us: Raw fish is off the table for cats.',
'The oldest cat video on YouTube dates back to 1894 (when it was made, not when it was uploaded, duh).',
'In the 1960s, the CIA tried to turn a cat into a bonafide spy by implanting a microphone into her ear and a radio transmitter at the base of her skull. She somehow survived the surgery but got hit by a taxi on her first mission.',
'The technical term for “hairball” is “bezoar.”',
'Female cats are typically right-pawed while male cats are typically left-pawed.',
'Cats make more than 100 different sounds whereas dogs make around 10.',
'A cat’s brain is 90% similar to a human’s — more similar than to a dog’s.',
'Cats and humans have nearly identical sections of the brain that control emotion.',
'A cat’s cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog’s 160 million.',
'Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing.',
'Basically, cats have a lower social IQ than dogs but can solve more difficult cognitive problems when they feel like it.',
'Cats have 1,000 times more data storage than an iPad.',
'It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.',
'In the 15th century, Pope Innocent VIII began ordering the killing of cats, pronouncing them demonic.',
'A cat has five toes on his front paws, and four on the back, unless he’s a polydactyl.',
'Polydactyl cats are also referred to as “Hemingway cats” because the author was so fond of them.',
'There are 45 Hemingway cats living at the author’s former home in Key West, Fla.',
'Original kitty litter was made out of sand but it was replaced by more absorbent clay in 1948.',
'Abraham Lincoln kept four cats in the White House.',
'When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied “cats.”',
'Isaac Newton is credited with inventing the cat door.',
'One legend claims that cats were created when a lion on Noah’s Ark sneezed and two kittens came out.',
'A cat can jump up to six times its length.',
'A house cat is faster than Usain Bolt.',
'When cats leave their poop uncovered, it is a sign of aggression to let you know they don’t fear you.',
'Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example.',
'Cats use their whiskers to detect if they can fit through a space.',
'Cats only sweat through their foot pads.',
'The first cat in space was French. She was named Felicette, or “Astrocat.” She survived the trip.',
'Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.',
'Hearing is the strongest of cat’s senses: They can hear sounds as high as 64 kHz — compared with humans, who can hear only as high as 20 kHz.',
'Cats can move their ears 180 degrees.',
'They can also move their ears separately.',
'A cat has detected his human’s breast cancer.',
'A cat’s nose is ridged with a unique pattern, just like a human fingerprint.',
'Cats have scent glands along their tail, their forehead, lips, chin, and the underside of their front paws.',
'A cat rubs against people to mark its territory.',
'Cats lick themselves to get your scent off.',
'When a family cat died in ancient Egypt, family members would shave off their eyebrows as they mourned.',
'They also had elaborate memorials that included mummifying the cat and either burying it in a family tomb or pet cemetery.',
'Cats were mythic symbols of divinity in ancient Egypt.',
'Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia.',
'Most cats don’t like water because their coats do not insulate them well enough.',
'Most cats don’t like water because their coats do not insulate them well enough. However, a cat called the Turkish Van does not have that insulation problem and LOVES it.',
'The Egyptian Mau is the oldest breed of cat.',
'The Egyptian Mau is also the fastest pedigreed cat.',
'The Egyptian word for cat is “mau.”',
'Only 11.5% of people consider themselves “cat people.”',
'Cat people are 11% more likely to be introverted.',
'Cat people are more open to new experiences than typical “dog people.”',
'Cat owners who are male tend to be luckier in love, as they are perceived as more sensitive.',
'Cat owners are 17% more likely to have a graduate degree.',
'Cat people are 25% likely to pick George as their favorite Beatle.',
'A cat’s carbon footprint is similar to that of a VW Bug, whereas a dog’s is more like a Hummer.',
'When your cat brings home a dead mouse or bird, it may do so to show you that you suck at hunting.',
'Cats have inferior daytime sight, but during the night they need seven times less light than humans to see.',
'The largest litter of kittens produced 19 kittens.',
'Eighty-eight percent of cats in the U.S. are spayed or neutered.',
'Only 24% of cats who enter animal shelters are adopted.',
'Cats are really cool.',
'Cats are very soft.',
'If you want to adopt a cat, you can visit your local Humane Society or check out petfinder.com.'
];

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}









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
    body: catFacts[randomInt(0,catFacts.length)] // body of the SMS message

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









