const fs = require('fs'); 
let rawdata = fs.readFileSync('student.json');

let user = JSON.parse(rawdata);

console.log(user);
