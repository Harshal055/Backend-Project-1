
// require('dotenv').config({path:'./.env'})

 import dotanv from 'dotenv'
import connectDB  from "./db/index.js";

dotanv.config({path:'./.env'})


connectDB()


























// import express from "express"
// const app = express()

// (async()=>{
// try{
//     await mongoose.connect(`${ process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=> {
//         console.log("ERRRO", error);
//         throw error
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port $
//             {process.env.PORT}`);
         
//     })

// }catch(error){
//     console.log("ERROR",error)
//     throw err
// }
// })()