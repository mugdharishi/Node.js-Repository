const fs=require('fs');
const path=require('path');

//Createing path : current directory and the sub directory under it
const filePath=path.join(__dirname,"TestFiles");

//Creating single file under path
fs.writeFileSync(`${filePath}/test.txt`,"I am a girl...!!");

//Creating multiple files under path
for(let i=0;i<5;i++){
    fs.writeFileSync(`${filePath}/Hello${i}.txt`,"Heyy..!!!");
}

//Note : when you run the loop again in next run of program , same files will be overwritten.

//Reading Files under directory
// filePath: path of directory till dirname
// allFiles : random var 
fs.readdir(filePath,(err,allFiles)=>{
    //To print array of filenames
    console.warn(allFiles);

    //To print individual file
    allFiles.forEach((item)=>{
        console.log("file name is : ",item);
    });
    
});