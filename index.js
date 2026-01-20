const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 3000

const app = express()
app.use(cors()) // use cors middleware
app.use(express.json()) // use express middleware


const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    await client.connect();

    const recipesCollection = client.db("recipesDB").collection('recipes')


    // Post a recipe to the DB
    app.post('/recipes', async (req, res) => {
        const recipe = req.body
        const result = await recipesCollection.insertOne(recipe)
        res.send(result)
    })

    // GET all recipes from the DB
    app.get('/recipes', async (req, res) => {
        const recipes = await recipesCollection.find({}).toArray();
        res.send(recipes);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})