 const { createServer } = require('http');
// const app = require('./app');
// const fs = require('fs');
// console.log(app.x);
// fs.writeFileSync("Murari.txt", "Hello Murari, Learn and Grow");



// var a = 10;
// var b = 10;
// var res = a + b; 

// const arr = [2,5,10 ,6,7,8];

// arr.filter((val)=>{
//     if(val > 4) {
//         console.log(val);
//     }
// })


// CREATING A BASIC SERVER
// const http = createServer((req, res)=>{
//     res.writeHead(200, {"Content-type":"application\json"});
//     res.write(JSON.stringify(app.data));
//     res.end();
// }).listen(4500);

// console.log(process.argv);
 
//CALLBACK FUNCTION
// function callback(){
//     console.log("Murari is calling a callback function");
// }

// const add = function(a,b, callback){
//     var result = a + b;
//     console.log('result'+result);
//     callback();
// }

// add(4,5, callback);
// add(4,1, function(){
//     console.log("Hello Murari");
// });

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi'+user.username+'!\n', ()=>{
//     console.log("File is Created");
// });

// const age = app.age;
// console.log(age);

//LODASH EXAMPLE
// var _ = require('lodash');
// var data = ["person", "person", 1, 2, 1, "name", "age"];

// var filter = _.uniq(data);
// console.log(filter);

//CREATING A SERVER
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Welcome to our hotel');
});


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, ()=>{
    console.log("Server is Listening on Port 3000...")
});