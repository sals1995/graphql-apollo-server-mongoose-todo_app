import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()


const {DB_NAME,DB_HOST}=process.env
const URI=`${DB_HOST}/${DB_NAME}`


/**
 * Connect to the mongo database.
 */
const connectToDatabase = async () => {
    try {        
        await mongoose.connect(URI);
    } catch (error) {
        throw error
    }
}

/**
 * Drop database, close the connection and stop mongod.
 */
const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}

/**
 * Remove all the data for all db collections.
 */
const clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}

export {clearDatabase,closeDatabase,connectToDatabase}