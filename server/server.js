//Todos 

//get mongo shell working


// Variable set ups
const express = require('express'); 
const mongoose = require('mongoose'); 
const mongo = require('mongodb'); 
const path = require('path'); 
const cors = require('cors'); 
const app = express();
const Person = require('./models/people.js');
const seed = require('./seed.js'); 
const MLAB_URL = 'mongodb://troutman:password@ds261838.mlab.com:61838/microwave_queue';
 


//App configuration
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));  
app.set('view engine', 'ejs');



//Connect to your db
mongoose.connect(MLAB_URL, (err, db) => {
    if(err){
        console.log(err);
    }else{
        console.log(`You conncected to your ${MLAB_URL} DB...`); 
    }
});

//Seed Data: Remove all prev data and add seed data.
seed(); 

//////////////////
//////Routes//////
//////////////////

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/goodbye', (req, res)=>{
    res.render('goodbye'); 
}); 

app.get('/var/:blah', (req, res)=>{ 
    let temp = req.params.blah;
    res.render('var', {temp}); 
}); 


//////////////////
////DB Routes/////
//////////////////

app.get('/person',(req, res) =>{
    Person.find({}, (err, people) => {
        if(err){
            console.warn('Error in the /data route: ', err); 
        }else{
            console.log('People: ', people);
            res.send(people); 
        }
    });
});

// app.post('/person')










//Server lisening
const port = 3001;
app.listen(port, ()=>{console.log(
    `server is listening on ${port}...`
)});