const { MongoClient, Db } = require("mongodb")
require("dotenv").config({path:"./config.env"})

async function main(){

    const db = process.env.NODE_ENV
    const client = new MongoClient(Db)

    await client.connect()
}