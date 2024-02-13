const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// jo krna hain bss yaha se

app.post("/saveDetails", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("testingDB");
  const coll = db.collection("details");
  const record = {
    name: req.body.name,
    role: req.body.role,
    username: req.body.username,
    password: req.body.password,
  };
  coll
    .insertOne(record)
    .then((result) => {
      console.log(req.body.name, req.body.role);
      res.send(result);
    })
    .catch((error) => console.log(error));
});

app.post("/createCourse", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("testingDB");
  const coll = db.collection("courses");
  const record = {
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
  };
  coll
    .insertOne(record)
    .then((result) => {
      console.log(req.body.username, " added ", req.body.title);
      res.send(result);
    })
    .catch((error) => console.log(error));
});

app.listen(9000, () => {
  console.log("ready to serve @ 9000");
});
