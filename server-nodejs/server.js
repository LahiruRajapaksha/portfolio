import express from "express";
import cors from "cors";
import { addData, getData } from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  const notes = await getData(req.query.id);
  res.send(notes);
});

app.post("/addData", async (req, res) => {
  // console.log("title", JSON.parse(req.body));
  const { title, contents } = req.body;
  const dataAdded = await addData(title, contents);
  res.status(201).send(dataAdded);
});

app.listen(4000, () => console.log("Server running on port 4000"));
