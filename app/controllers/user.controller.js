const userService = require("../services/user.service.js");

exports.findOverviewByUserId = async (req, res) => {
    const response = await userService.findOverviewByUserId(req.params.id);
    res.status(response.status).send(response);
  };

exports.findMessageByUserId = async (req, res) => {
    const response = await userService.findMessageByUserId(req.params.id);
    res.status(response.status).send(response);
  };

exports.findMessageById = async (req, res) => {
    const response = await userService.findMessageById(req.params.id);
    res.status(response.status).send(response);
  };

exports.updateMessageById = async (req, res) => {
    const response = await userService.updateMessageById(req.params.id);
    res.status(response.status).send(response);
  };