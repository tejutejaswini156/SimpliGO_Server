module.exports = (app) => {
    const products = require("../controllers/product.controller");
    var router = require("express").Router();
    router.post("/", products.create);
    router.get("/getAllproducts",products.findAll);
    app.use("/products", router);
  };
