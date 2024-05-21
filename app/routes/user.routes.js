module.exports = app => {
    const usersController = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    router.get("/:id", usersController.findOverviewByUserId);
    router.get("/:id/messages", usersController.findMessageByUserId);
    router.get("/messages/:id", usersController.findMessageById);
    router.put("/messages/:id", usersController.updateMessageById);
  
    app.use('/api/users', router);
  };