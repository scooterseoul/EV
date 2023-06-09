const express = require("express");
const carRoutes = require("./product/routes");
const app = express();
const port = 5000;
var cors = require("cors");

app.use(express.json()); //middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/cars", carRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
