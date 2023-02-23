//Inbuilt module
const fs=require('fs');

//to import only specific function and use it directly
const fsDemo = require('fs').writeFileSync;
fsDemo("demo.txt","Tulip_Wind");

//If file already exist then Overwrite the string if not first create then add
fs.writeFileSync("Hello.txt","Code step by step");
console.log(__dirname);
console.log(__filename);



