const express = require("express");

const app = express();

const products = require("./api/routes/product")

app.use("/products",products)

module.exports=app;