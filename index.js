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
        const result = await recipesCollection.find({}).toArray();
        res.send(result);
    });

    // GET top 6 liked recipes from the db
    app.get('/top-recipes', async (req, res) => {
        const result = await recipesCollection.find({}).sort({ likes: -1 }).limit(6).toArray();
        res.send(result)
    })

    // GET my recipes from the DB
    app.get('/recipes/:email', async (req, res) => {
        const email = req.params.email
        const filter = { email }
        const result = await recipesCollection.find(filter).toArray();
        res.send(result);
    });


    // GET single recipes from the DB
    app.get('/recipe-details/:id', async (req, res) => {
        const id = req.params.id
        const filter = { _id: new ObjectId(id) }
        const result = await recipesCollection.findOne(filter);
        res.send(result);
    });

    // Update like count of a recipe in the DB
    app.patch('/recipe/like/:id', async (req, res) => {
        const id = req.params.id
        const filter = { _id: new ObjectId(id) }
        const result = await recipesCollection.updateOne(filter, { $inc: { likes: 1 } })
        res.send(result)
    })

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