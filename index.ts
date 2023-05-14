require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.NODE_PORT || 4001;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.all("*", (req: any, res: any) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
