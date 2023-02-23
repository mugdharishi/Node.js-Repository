//Command Line Argument
console.log(process);

//First 2 args ars are :
//1. node location under program file
//2. currenr file's location
console.log(process.argv);

//from 3rd args i.e. from index 2 we can pass args with seperated spaces
console.log(process.argv[3]); //Prints 4th argument 

const fs=require('fs');

const input=process.argv;

//First arg is file name and second is conent to be 
//written in the file
fs.writeFileSync(input[2],input[3]);

//Run command node app7.js hello.txt 'Hey this is mugdha'


