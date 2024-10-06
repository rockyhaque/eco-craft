const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// config
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5173",
      "https://eco-craft-beta.web.app",
    ],
    credentials: true,
  })
);

// database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@revive.2tkcldw.mongodb.net/?retryWrites=true&w=majority&appName=Revive`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    // await client.connect();

    const database = client.db("craftDB");

    const craftCollection = database.collection("crafts");
    // const userCollection = database.collection("users");
    const wishlistCollection = database.collection("wishlists");
    const purchasedItemsCollection = database.collection("purchasedItems");

    // all craft apis
    app.get("/craft", async (req, res) => {
      const search = req.query.search || ""; // Get the search term from the query parameters
      const query = {
        $or: [
          { name: { $regex: search, $options: "i" } }, // Case-insensitive search for name
          { category: { $regex: search, $options: "i" } },
          { price: { $regex: search, $options: "i" } },
        ],
      };
      const cursor = craftCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/craft", async (req, res) => {
      const newCraft = req.body;
      const result = await craftCollection.insertOne(newCraft);
      // console.log(result);
      res.send(result);
    });

    app.get("/craft/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftCollection.findOne(query);
      res.send(result);
    });

    app.get("/myCraft/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await craftCollection.find(query).toArray();
      // console.log(result);
      res.send(result);
    });

    app.put("/craft/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
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
        },
      };

      const result = await craftCollection.updateOne(filter, craft, options);
      res.send(result);
    });

    app.delete("/craft/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await craftCollection.deleteOne(query);
      res.send(result);
    });

    // -----------------Wish List-------------------

    // Add a new item to the wishlist
    app.post("/wishlist", async (req, res) => {
      const {
        userEmail,
        itemId,
        itemName,
        itemDescription,
        itemPrice,
        itemImage,
      } = req.body;

      const existingItem = await wishlistCollection.findOne({
        userEmail: userEmail,
        itemId: itemId,
      });

      if (existingItem) {
        return res
          .status(400)
          .send({ message: "Item already exists in wishlist." });
      }

      const newItem = {
        userEmail,
        itemId,
        itemName,
        itemDescription,
        itemPrice,
        itemImage,
      };
      const result = await wishlistCollection.insertOne(newItem);
      res.send(result);
    });

    // Get all wishlist items for a user
    app.get("/wishlist/:email", async (req, res) => {
      const userEmail = req.params.email;
      const query = { userEmail: userEmail };
      const result = await wishlistCollection.find(query).toArray();
      res.send(result);
    });

    // Delete an item from the wishlist
    app.delete("/wishlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await wishlistCollection.deleteOne(query);
      res.send(result);
    });

    // -----------------Purchase-------------------

    // save a purchase item
    app.post("/purchase", async (req, res) => {
      const purchasedItem = req.body;

      const { userEmail, itemId, itemName, itemPrice, itemImage } =
        purchasedItem;
      if (!userEmail || !itemId || !itemName || !itemPrice || !itemImage) {
        return res.status(400).send({ message: "All fields are required." });
      }

      purchasedItem.purchaseTime = new Date();

      try {
        const result = await purchasedItemsCollection.insertOne(purchasedItem);
        res
          .status(201)
          .send({ message: "Item purchased successfully!", data: result });
      } catch (error) {
        console.error("Error saving purchased item:", error);
        res.status(500).send({ message: "Failed to save purchased item." });
      }
    });

    // get all the purchased items for spesific user email
    app.get("/purchasedItems", async (req, res) => {
      const userEmail = req.query.email; 

      if (!userEmail) {
        return res.status(400).send({ message: "Email is required." });
      }

      try {
        
        const purchasedItems = await purchasedItemsCollection
          .find({ userEmail })
          .toArray();

        // Check if there are no items
        if (purchasedItems.length === 0) {
          return res
            .status(404)
            .send({ message: "No purchased items found for this user." });
        }

        res.status(200).send(purchasedItems); 
      } catch (error) {
        console.error("Error fetching purchased items:", error);
        res.status(500).send({ message: "Failed to fetch purchased items." });
      }
    });

    // delete a purchase item
    app.delete("/purchasedItems/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const result = await purchasedItemsCollection.deleteOne({ itemId: id });
        if (result.deletedCount === 0) {
          return res.status(404).send({ message: "Item not found." });
        }
        res.status(200).send({ message: "Item deleted successfully." });
      } catch (error) {
        console.error("Error deleting purchased item:", error);
        res.status(500).send({ message: "Failed to delete purchased item." });
      }
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
