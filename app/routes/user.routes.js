module.exports = (app) => {
    const user = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    router.post("/", user.create);
    router.get("/getAll",user.findAll);
    router.post("/sendmail",user.createmail);
    app.use("/user", router);
  };