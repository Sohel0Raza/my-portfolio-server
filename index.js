import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectRouter from "./routes/project.rotue.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/project", projectRouter)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q6zwl04.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Cluster0`;

async function run() {
  await mongoose.connect(uri);
}

run()
  .then(() => console.log("mongoose connect successfuly"))
  .catch((error) => console.log(error));

  app.listen(port ,()=>{
    console.log(`my portfolio server is running on port:${port}`)
  })
