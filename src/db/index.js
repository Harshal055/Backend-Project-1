import mongoose from "mongoose";
import {DB_NAME} from  "../constants.js"


const connectDB = async () =>{


    try {
        const connectionInstace =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MOngoDB connect  !! DB HOST: ${connectionInstace.connection.host}`);
    }
    catch(eror){
        console.log("MONGODB CONNECTION FAILED ", eror);
        process.exit(1);
    }
    }

    export default connectDB;

