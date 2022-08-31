const {MongoClient} = require('mongodb');
    const uri = "mongodb+srv://yaminshelly:22571042@cluster0.45teb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
     client.connect();

        // Make the appropriate DB calls
       // await  listDatabases(client);



    // const result1 =  await findOneProductByName(client, "Lenovo Legion K300 RGB"); 

    }catch(e){
        console.error(e);
       
    } finally{
         client.close();
    }



//connect to the client with the express: 
const express = require('express')
var router = express.Router()


//home page router
router.get('/', function(req, res)  {
    res.send('this is the productServer routing ');
  })


/*router.get('/getproducts', function(req, res)  {
  const result =  client.db("gaming_store").collection("Products")
  .find().pretty();
  res.json(result); // send to the client angular 
  })*/

  module.exports= router;