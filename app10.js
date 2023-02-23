//CRUD in File
const fs=require('fs');
const path=require('path');

let dirPath=path.join(__dirname,"crud");
let filePath=`${dirPath}/operations.txt`;

//1. File Creation
fs.writeFileSync(filePath,"CRUD Operations Demo");

//2.Rading file data
fs.readFileSync(filePath,'utf8',(err,item)=>{
    console.log(item);
});

//3.Updating file data
fs.appendFileSync(filePath,'. Now performing append to update',(err)=>{
if(!err){console.log('File Updated sucessfully');}    
});

//4.Renameing file
fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
    console.log("File name has changed..!!")
})
//Note: filePath do not contains fruits.txt's path

//5.Deleting file 
fs.unlinkSync(`${dirPath}/fruits.txt`);
