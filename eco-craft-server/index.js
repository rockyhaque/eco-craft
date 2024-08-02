const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// config
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// app.use(cors({
//   origin: ["https://eco-craft-beta.web.app"],
//   credentials: true
// }));



// database connection
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@revive.2tkcldw.mongodb.net/?retryWrites=true&w=majority&appName=Revive`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	
    // await client.connect();

    const database = client.db("craftDB");

    const craftCollection = database.collection("crafts");
    const userCollection = database.collection("users");

    // craft apis
    app.get("/craft", async (req, res) => {
      const cursor = craftCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })


    app.post("/craft", async(req, res) => {
        const newCraft = req.body;
        const result = await craftCollection.insertOne(newCraft);
        // console.log(result);
        res.send(result);
    })

    app.get("/craft/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.findOne(query);
      res.send(result)
    })

    app.get("/myCraft/:email", async(req, res) => {
        const email = req.params.email;
        const query = {email: email};
        const result = await craftCollection.find(query).toArray();
        // console.log(result);
        res.send(result)
    })


    app.put("/craft/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedCraft = req.body;
      const craft = {
        $set: {
          name: updatedCraft.name,
          rating: updatedCraft.rating,
          category: updatedCraft.category,
          price: updatedCraft.price,
          customization: updatedCraft.customization,
          stockStatus: updatedCraft.stockStatus,
          processing_time: updatedCraft.processing_time,
          description: updatedCraft.description,
          craftPhotoURL: updatedCraft.craftPhotoURL,
        }
      };

      const result = await craftCollection.updateOne(filter, craft, options);
      res.send(result);
    })

    
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedCraft = req.body;
    //   const craft = {
    //     $set: {
    //       name: updatedCraft.name,
    //       rating: updatedCraft.rating,
    //       category: updatedCraft.category,
    //       price: updatedCraft.price,
    //       customization: updatedCraft.customization,
    //       stockStatus: updatedCraft.stockStatus,
    //       processing_time: updatedCraft.processing_time,
    //       description: updatedCraft.description,
    //       craftPhotoURL: updatedCraft.craftPhotoURL,
    //       email: updatedCraft.email,
    //       userName: updatedCraft.userName,
    //       photoURL: updatedCraft.photoURL,
    //       accountCreation: updatedCraft.accountCreation,
    //       accountLastSignIn: updatedCraft.accountLastSignIn,
    //     },
    //   };
    
    //   const result = await craftCollection.updateOne(filter, craft, options);
    //   res.send(result);
    // });
    

    app.delete("/craft/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.deleteOne(query);
      res.send(result)
    })





    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

