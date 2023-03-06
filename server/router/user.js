const {
  createuser,
  getusers,
  getUserById,
  updateuser,
  deleteuser,
  login,
  changePassword,
} = require("../controller/user");
const {
  createcommand,
  getcommands,
  deletecommand,
  getCommandById,
} = require("../controller/command");
// const { addProductToUserCart, deleteProductFromUserCart, getProductFromUserCart } = require('../controller/cart')
const { admin } = require("../config/roles");
const express = require("express");
const verifylogin = require("../config/jwt");

const userrouter = express.Router();

// userrouter.get('/', verifylogin, admin, getusers)
// userrouter.post('/users', verifylogin, admin, createuser)
userrouter.post("/users", createuser);
userrouter.post("/login", login);
userrouter.put("/changePassword/:id", verifylogin, changePassword);
userrouter.get("/", getusers);
userrouter.get("/:id", getUserById);
userrouter.put("/:id", verifylogin, admin, updateuser);
userrouter.delete("/:id", verifylogin, admin, deleteuser);

// related to command //

userrouter.post("/command/add", createcommand);
userrouter.get("/command/all", verifylogin, admin, getcommands);
userrouter.get("/command/:id", verifylogin, getCommandById);
userrouter.delete("/command/delete/:id", verifylogin, admin, deletecommand);

// related to command //

module.exports = userrouter;
