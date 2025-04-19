// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// unix date
app.get("/api/:date?",(req,res) => {
  const timedate = req.params;
  const convDate = new Date(parseInt(timedate.date));
  res.json({unix: parseInt(timedate.date), utc: convDate.toUTCString()})
})

// utc date
// app.get("api/2015-12-25",(req,res) => {
//   const date = new Date('2015-12-25')
//   res.json({unix: date.parse(), utc: date.toUTCString()})
// })


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
