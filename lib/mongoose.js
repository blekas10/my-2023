import mongoose from "mongoose";

export async function initMongoose(){
    if(mongoose.connection.readyState === 1){
         return mongoose.connection.asPromise();
    }
    const result = await mongoose.connect(process.env.MONGODB_URL ?? 'mongodb://localhost/my-database');
    return result.connection;
}