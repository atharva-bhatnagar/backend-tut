import express from "express";
import Cors from "cors";
import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(Cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(dbConfig.url)
  .then(console.log("connected to db"))
  .catch((err) => {
    console.log("could not connect to db ", err);
  });

app.get("/", (req, res) => {
  res.json({ message: "hey its working!!!" });
});

app.listen(port, () => {
  console.log("app listening!!!");
});
