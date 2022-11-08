const fs=require('fs');
const path=require("path");

//Creating a folder using node Js

// fs.mkdir(path.join(__dirname,"test"),(err)=>{
//     if(err){
//         throw new Error(err);
//     }

//     console.log("Folder created");
// });


//writing data to a file synchronously
// fs.writeFileSync(path.join(__dirname,"test","text.txt"),"My name is Prabesh Bista");

//writing data to a file asynchronously
fs.writeFile(path.join(__dirname,"test","test.txt"),"Hello Prabesh How you doing?",(err,resolve)=>{
    if(err){
        throw err;
    }
    fs.appendFile(path.join(__dirname,"test","test.txt"),"\nHello Prabesh for the second time",(err,resolve)=>{
        if (err){
            throw err;
        }
    })
    console.log("Data has been written successfully!");
});

//

