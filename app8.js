const fs=require('fs');
const input=process.argv;

//If 3rd argument is 'add' then make file of name 4th arg and
//write data 'Mugdha'

if(input[2]=='add')
{
    fs.writeFileSync(input[3],'Mugdha');
}
else if(input[2]=='remove')
{
fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid i/p");
}

//Run node app8.js add tulips.txt
//OR node app8.js remove tulips.txt  