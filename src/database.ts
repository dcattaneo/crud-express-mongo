import mongoose from 'mongoose'
import config from './config'

export async function connectDB()  {
    try {
        // const mongooseOptions: ConnectOptions = {
        //     user: config.MONGO_USER,
        //     pass: config.MONGO_PASSWORD
        // }
       // "mongodb://127.0.0.1/test"
        // `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`

        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
        console.log('Database is connected to', db.connection.name);
    } catch (error) {
        console.error(error)
    }
   
}