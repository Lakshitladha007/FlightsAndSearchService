// We are using Common-Js moduling
const express=require("express"); 

const { PORT }=require('./config/serverConfig');

const setupAndStartServer= async()=>{

    //create the express object
    const app=express();
    
    app.listen(PORT,()=>{  // this PORT variable is directly being accessed from ".env" file
      console.log(`Server started at ${PORT}`);
    //   console.log(process.env);
    });
}

setupAndStartServer();
 