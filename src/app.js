import express from "express";
import fib from "./fib";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fib/:num", fib);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
