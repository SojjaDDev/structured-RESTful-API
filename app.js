const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());


const homeRoute = require("./routes/home-routes");
const arrayRoute = require("./routes/array-routes");

app.use("/", homeRoute);
app.use("/api/array" , arrayRoute);

const port = process.env.app_port || 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})
