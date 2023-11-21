const fs = require('fs');

const express = require('express');
const port = 3000;
const app = express();
const path = require('path')
var bodyParser = require('body-parser')
app.use('/', express.static(path.join(__dirname, '')))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
const cookieParser = require("cookie-parser");


app.use(cookieParser());


app.get('/test', (req, res) => {
  
});

app.get('/',(req,res) =>{
  
  
  res.sendFile(__dirname + "/index.html")
})
app.get('/flaggame',(req,res) =>{
  
  
  res.sendFile(__dirname + "/flag/flag.html")
})
app.get('/rate',(req,res) =>{
  fs.readFile('rate.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        res.status(500).send('Error reading index.html');
        return;
    }
    res.send(data);
});
});
  app.get('/rates', async (req,res)=>{
    const rates = JSON.parse(fs.readFileSync("json/rate.json"));
    
    const ratesstring = JSON.stringify(rates)
    const ratesstring2 = JSON.parse(ratesstring)
 
    res.render('rates', { data: ratesstring2 });
  });
  
app.post('/ratepost',(req,res)=>{


const rates = JSON.parse(fs.readFileSync("json/rate.json"));
const username = req.cookies['username']
const userimg = req.cookies['userimg']
const useremail = req.cookies['usercoemail']

const rate5 = req.body.rate5;
  const ratedescription = req.body.ratedescription;
  

const newrate = {
  username:username,
  usercoimg:userimg,
  useremail:useremail,
  "rate55":rate5,
  "ratedess":ratedescription

}
console.log(newrate)
rates.push(newrate)
const ratesstring = JSON.stringify(rates,null,2);
fs.writeFileSync("json/rate.json", ratesstring, writeFileCallback)
res.redirect('/#thanks');
})
app.listen(port,()=>{
  console.log(`mawq3 is online http://localhost:${port}`)
})
const { stringify } = require('querystring');
  


// functions
function writeFileCallback(err) {
  if (err) {
    console.error(err);
    window.location.href = "/rate";
  } else {
   
    console.log('File written successfully');
  }
}
