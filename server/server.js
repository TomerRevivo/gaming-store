//connect to mongo data base
const { MongoClient } = require("mongodb");

console.log("run server.js ");

//express server
var express = require("express");
var bodyParser = require("body-parser");
var product = require("./routers/products");
var app = express();
var cors = require("cors");

(async function () {
  const uri =
    "mongodb+srv://yaminshelly:22571042@cluster0.45teb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  console.log("before db connect");

  await client.connect().catch(console.error);
  console.log("db connected");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  //   app.use("/products", product);

  const port = 4100;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  app.get("/getAllProducts", async function (req, res) {
    try {
      const result = await client
        .db("gaming_store")
        .collection("Products")
        .find({})
        .toArray();
      console.log(`result${result}`);
      res.json(result); // send to the client angular
    } catch (e) {}
  });

  app.post("/subscriptions", async function (req, res) {
    try {
      await client
        .db("gaming_store")
        .collection("subscriptions")
        .insertOne({ name: req.body.name, email: req.body.email });
      res.status(201).json({});
    } catch (e) {
      res.status(400).json({});
    }
  });

  //module.exports= router;
})();
//////////////////////////////////////////////////
//reading from dbmongo - >
async function findOneProductByName(client, nameOfProduct) {
  const result = client
    .db("gaming_store")
    .collection("Products")
    .findOne({ title: nameOfProduct });

  if (result) {
    console.log(
      `Found a product in the collection with the name '${nameOfProduct}'`
    );
    console.log(result);
    return result;
  } else {
    console.log(`No product found with the name '${nameOfProduct}`);
  }
}

//insert array of document into the collection of products :
async function createMultipleProduct(client, newProducts) {
  const result = await client
    .db("gaming_store")
    .collection("Products")
    .insertMany(newProducts);

  console.log(
    `${result.insertedCount} new products created with the folowing id : (s) : `
  );
  console.log(result.insertedIds);
}

//CREATE object ON MONGODB collection - products on gaming_store data base
async function createProduct(client, newListing) {
  const result = await client
    .db("gaming_store")
    .collection("Products")
    .insertOne(newListing);

  console.log(`new listing create with the folowing id : ${result.insertedId}`);
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
