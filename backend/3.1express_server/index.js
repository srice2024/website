import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(3000, () => {
  console.log(`Our server is running on port ${port}.`);
});
