# Project: Thatix (Recipe Sharing Platform) 
 
This is the backend server for a Thatix (Recipe Sharing Platform) where users can create, manage, discover, and like recipes. The backend provides RESTful APIs for recipe management, filtering, and user-based operations.

## Live Links: 
- client: https://web-project-27-client.netlify.app/
- server: https://web-project-27-server-v1-monolithic.onrender.com

## Repository Links:
- client: https://github.com/muhammad-tamim/web-project-27-client
- server: https://github.com/muhammad-tamim/web-project-27-server

## Tech Stack:
- Node.js
- Express
- MongoDB
- dotenv
- cors
  
## Features: 
- Create, update, and delete recipes
- View all recipes
- Like recipes
- Get top 6 most liked recipes
- Filter recipes by category
- Filter recipes by cuisine
- View recipes created by a specific user

## What i learn:

1. How to seed initial data into MongoDB for testing:

```js
.....
.....
.....
async function run() {
    await client.connect();

    const recipesCollection = client.db("recipesDB").collection('recipes')


    const seedRecipes = [
        {
            title: "Salmon Pasta Pomodoro",
            image: "https://i.ibb.co.com/qw2wnX3/appetizers-1.jpg",
            ingredients: "Salmon, pasta, tomato sauce, olive oil, garlic",
            instructions: "Cook pasta, pan-sear salmon, mix with tomato sauce and combine.",
            category: "Appetizers",
            cuisine: "Italian",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 15,
            totalTime: 25,
            likes: 0
        },
        {
            title: "Bruschetta with Tuna",
            image: "https://i.ibb.co.com/7L3S8NT/appetizers-2.jpg",
            ingredients: "Bread, tuna, olive oil, garlic, tomatoes",
            instructions: "Toast bread, mix tuna topping, assemble and serve.",
            category: "Appetizers",
            cuisine: "Italian",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 10,
            totalTime: 20,
            likes: 0
        },
        {
            title: "Peruvian Cod Ceviche",
            image: "https://i.ibb.co.com/ZRCJ6VxW/appetizers-3.jpg",
            ingredients: "Cod fish, lime juice, onion, chili, coriander",
            instructions: "Marinate fish in lime juice, add spices and chill.",
            category: "Appetizers",
            cuisine: "Mexican",
            difficulty: "Medium",
            prepTime: 20,
            cookTime: 0,
            totalTime: 20,
            likes: 0
        },

        {
            title: "Greek Gyro",
            image: "https://i.ibb.co.com/4n67JqBy/beef-1.jpg",
            ingredients: "Beef, pita bread, yogurt sauce, spices",
            instructions: "Cook beef with spices, assemble gyro with sauce.",
            category: "Beef",
            cuisine: "Mexican",
            difficulty: "Medium",
            prepTime: 15,
            cookTime: 20,
            totalTime: 35,
            likes: 0
        },
        {
            title: "Ultimate Cheese Burger",
            image: "https://i.ibb.co.com/S4zH2xNr/beef-2.jpg",
            ingredients: "Beef patty, cheese, burger bun, onion",
            instructions: "Grill beef patty, melt cheese, assemble burger.",
            category: "Beef",
            cuisine: "Mexican",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 15,
            totalTime: 25,
            likes: 0
        },
        {
            title: "Tomahawk Steak",
            image: "https://i.ibb.co.com/YTRCyh8K/beef-3.jpg",
            ingredients: "Beef steak, salt, pepper, butter",
            instructions: "Season steak, grill on high heat, rest before serving.",
            category: "Beef",
            cuisine: "Japanese",
            difficulty: "Hard",
            prepTime: 15,
            cookTime: 30,
            totalTime: 45,
            likes: 0
        },
        {
            title: "Ultimate Pot Roast",
            image: "https://i.ibb.co.com/MxJp01kW/beef-4.jpg",
            ingredients: "Beef, garlic, onion, herbs",
            instructions: "Slow cook beef with herbs until tender.",
            category: "Beef",
            cuisine: "Italian",
            difficulty: "Medium",
            prepTime: 20,
            cookTime: 60,
            totalTime: 80,
            likes: 0
        },

        {
            title: "Baked Chicken Breast",
            image: "https://i.ibb.co.com/N23Pk0Nv/chicken-1.jpg",
            ingredients: "Chicken breast, olive oil, garlic, spices",
            instructions: "Bake chicken until juicy and golden.",
            category: "Chicken",
            cuisine: "Italian",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 25,
            totalTime: 35,
            likes: 0
        },
        {
            title: "Chicken Tikka Masala",
            image: "https://i.ibb.co.com/8L0QR6W2/chicken-2.jpg",
            ingredients: "Chicken, yogurt, spices, tomato sauce",
            instructions: "Marinate chicken, cook in spiced tomato sauce.",
            category: "Chicken",
            cuisine: "Indian",
            difficulty: "Medium",
            prepTime: 20,
            cookTime: 30,
            totalTime: 50,
            likes: 0
        },
        {
            title: "Rotisserie Chicken",
            image: "https://i.ibb.co.com/1t7TZy6m/chicken-3.jpg",
            ingredients: "Whole chicken, soy sauce, garlic",
            instructions: "Slow roast chicken until evenly cooked.",
            category: "Chicken",
            cuisine: "Chinese",
            difficulty: "Medium",
            prepTime: 15,
            cookTime: 45,
            totalTime: 60,
            likes: 0
        },

        {
            title: "Tart Pecan Pie",
            image: "https://i.ibb.co.com/TMfcMdXb/desserts-1.jpg",
            ingredients: "Pecans, sugar, butter, flour",
            instructions: "Prepare filling, bake pie until set.",
            category: "Desserts",
            cuisine: "Mexican",
            difficulty: "Medium",
            prepTime: 20,
            cookTime: 30,
            totalTime: 50,
            likes: 0
        },
        {
            title: "Tofu and Cheese Pancakes",
            image: "https://i.ibb.co.com/yndnS30S/desserts-2.jpg",
            ingredients: "Tofu, cheese, flour, sugar",
            instructions: "Mix ingredients and pan-fry pancakes.",
            category: "Desserts",
            cuisine: "Japanese",
            difficulty: "Easy",
            prepTime: 15,
            cookTime: 15,
            totalTime: 30,
            likes: 0
        },
        {
            title: "Raspberry Tartlet",
            image: "https://i.ibb.co.com/SXSRM14n/desserts-3.jpg",
            ingredients: "Raspberry, flour, butter, sugar",
            instructions: "Bake tart shell, fill with raspberry mix.",
            category: "Desserts",
            cuisine: "Italian",
            difficulty: "Medium",
            prepTime: 20,
            cookTime: 25,
            totalTime: 45,
            likes: 0
        },
        {
            title: "Chocolate Brownie",
            image: "https://i.ibb.co.com/HLYp4kmg/desserts-4.jpg",
            ingredients: "Chocolate, cocoa powder, flour, butter",
            instructions: "Bake brownie until soft and fudgy.",
            category: "Desserts",
            cuisine: "Mexican",
            difficulty: "Easy",
            prepTime: 15,
            cookTime: 25,
            totalTime: 40,
            likes: 0
        },

        {
            title: "Chinese Veggie Stir Fry",
            image: "https://i.ibb.co.com/chMYVFB8/vegetarian-1.jpg",
            ingredients: "Mixed vegetables, soy sauce, garlic",
            instructions: "Stir fry vegetables on high heat.",
            category: "Vegetarian",
            cuisine: "Chinese",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 10,
            totalTime: 20,
            likes: 0
        },
        {
            title: "Rice Pilaf & Carrots",
            image: "https://i.ibb.co.com/bRXQzbcK/vegetarian-2.jpg",
            ingredients: "Rice, carrots, spices, oil",
            instructions: "Cook rice with carrots and spices.",
            category: "Vegetarian",
            cuisine: "Indian",
            difficulty: "Easy",
            prepTime: 10,
            cookTime: 20,
            totalTime: 30,
            likes: 0
        }
    ];



    const count = await recipesCollection.countDocuments();

    if (count === 0) {
        const result = await recipesCollection.insertMany(seedRecipes);
        console.log(`🌱 Seeded ${result.insertedCount} recipes`);
    } else {
        console.log("📦 Recipes already exist, skipping seed");
    }

   ......
   ......
   ......

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
```

2. Deploying a Node.js server on Render

## Challenges i faced: 

1. I faced lots of error while deploying the express server on vercel, so then i moved to render

## Project Architecture:

This backend follows a monolithic architecture, where all server logic is written inside a single file:

```
index.js
```

### Why I Choose Monolithic?

- Simple and beginner-friendly structure
- Easier debugging and learning
- Suitable for small projects

### Database Schema (Recipe)

```js
{
"_id": "ObjectId",
"title": "string",
"image": "string",
"ingredients": "string",
"instructions": "string",
"category": "string",
"cuisine": "string",
"difficulty": "string",
"prepTime": "number",
"cookTime": "number",
"totalTime": "number",
"likes": "number",
"email": "string"
}
```

Note: Some API responses may use older field names (likeCount, imageUrl, categories, cuisineType). These evolved during development.

## API Documentation:

BASE URL: 

```
https://web-project-27-server-v1-monolithic.onrender.com
```

1. Create a Recipe: 

```
POST /recipes
```
Request Body: 

```json
{
  "imageUrl": "string",
  "title": "string",
  "ingredients": "string",
  "instructions": "string",
  "cuisineType": ["string"],
  "preparationTime": 30,
  "categories": ["string"],
  "likeCount": 0,
  "email": "string"
}
```

Response (201 Created):

```json
{
  "acknowledged": true,
  "insertedId": "656f0b2a1e23bc..."
}
```

2. Get All Recipes:

```
GET /recipes
```

Response (200 OK):

```json
[
  {
    "_id": "656f0b2a1e23bc...",
    "title": "Spaghetti Carbonara",
    "ingredients": "Pasta, Eggs",
    "instructions": "...",
    "cuisineType": ["italian"],
    "categories": ["Dinner"],
    "likeCount": 10,
    "imageUrl": "...",
    "preparationTime": 25,
    "email": "user@example.com"
  }
]
```
3. Get Top 6 Liked Recipes: 

```
GET /top-recipes
```

Response (200 OK):

```json
[
  {
    "_id": "656f0b2a1e23bc...",
    "title": "Most Liked Recipe",
    "likeCount": 50,
    "imageUrl": "..."
  }
]
```

4. Get Recipes by User: 

```
GET /recipes/:email
```

Parameters:

```
email
```

Response (200 OK):

```json
[
  {
    "_id": "656f0b2a1e23bc...",
    "title": "User's Recipe",
    "email": "user@example.com",
    "ingredients": "...",
    "instructions": "...",
    "categories": ["Lunch"]
  }
]
```


5. Get Recipes by Category

```
GET /recipe-category/:category
```

Parameters:

```
category
```

Response (200 OK):

```json
[
  {
    "_id": "656f0b2a1e23bc...",
    "title": "Recipe Title",
    "categories": ["Dinner"]
  }
]
```


6. Get Recipes by Cuisine
   
```
GET /recipe-cuisine/:cuisine
```

Parameters:

```
cuisine
```

Response (200 OK):

```json
[
  {
    "_id": "656f0b2a1e23bc...",
    "title": "Recipe Title",
    "cuisineType": ["indian"]
  }
]
```

7. Get Single Recipe

```
GET /recipe-details/:id
```

Parameters:

```
id
```

Response (200 OK):

```json
{
  "_id": "656f0b2a1e23bc...",
  "title": "Spaghetti Carbonara",
  "ingredients": "Pasta, Eggs",
  "instructions": "...",
  "cuisineType": ["italian"],
  "categories": ["Dinner"],
  "likeCount": 10
}
```

8. Update Recipe

```
PATCH /recipe/:id
```

Parameters:

```
id
```

Request Body: (partial update allowed, excluding likeCount)

```json
{
  "title": "Updated Recipe Title",
  "ingredients": "Updated Ingredients"
}
```

Response (200 OK):

```json
{
  "acknowledged": true,
  "modifiedCount": 1
}
```

9. Update Recipe Like Count

```
PATCH /recipe/like/:id
```

Parameters:

```
id
```

Request Body: 

```json
{
  "likesCount": 1
}
```

Response (200 OK):

```json
{
  "acknowledged": true,
  "modifiedCount": 1
}
```

10. Delete Recipe

```
DELETE /recipe/:id
```

Parameters:

```
id
```

Response (200 OK):

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

11. Root Endpoint: 

```
GET /
```
Response (200 OK):

```
Hello World!
```

## Environment Variables

Create a .env file in the root directory

```js
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Installation & Setup:

1. Clone the Repository: 

```bash
git clone https://github.com/muhammad-tamim/web-project-27-server-v1-monolithic-architecture
cd web-project-27-server-v1-monolithic-architecture
```

2. Install Dependencies:

```bash
npm install
```

3. Create a .env File with: 

```
MONGODB_URI=Your MongoDB URI
PORT= Your Port
```

4. Start the Development Server(For locally testing):

```bash
npm run dev
```