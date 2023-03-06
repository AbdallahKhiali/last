const userModel = require("../model/user");
const productModel = require("../model/product");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// const secret = process.env.SECRET_KEY

const getusers = (req, res) => {
  // Forme then catch
  userModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "une erreur s'est produite",
      });
    });
};

const getUserById = (req, res) => {
  var id = req.params.id;
  userModel
    .findById(id)
    .then((data) => {
      res.json({
        id: data._id,
        role: data.role,
        accountFor: data.accountFor,
      });
      // res.json(data)
      // console.log(data)
    })
    .catch((err) => {
      res.json(err);
    });
};

const createuser = async (req, res) => {
  const { firstname, lastname, email, password, role, accountFor } = req.body;

  // console.log({ firstname, lastname, email, password, role, accountFor })

  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      res.json("user already exist");
    } else {
      bcrypt.hash(password, 16, (err, hash) => {
        let user = new userModel({
          email: email,
          accountFor: accountFor,
          firstname: firstname,
          lastname: lastname,
          role: role,
          password: hash,
        });
        user
          .save()
          .then((user) =>
            res.json({ message: "user added successfully", user })
          )
          .catch((err) => res.json(err));
      });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add name or password" });
  }
  userModel.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"successfully signed in"})
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
          );
          const { _id, email, firstname, lastname, role, accountFor } =
            savedUser;
          res.json({
            token,
            user: {
              _id,
              email,
              firstname,
              lastname,
              role: role,
              accountFor: accountFor,
            },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        res.status(400).json({
          error: error,
        });
      });
  });
};

const updateuser = (req, res) => {
  var id = req.params.id;
  userModel
    .findByIdAndUpdate(id, req.body)
    .then(() => {
      res.status(201).json({
        message: "user updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
      // console.log(error)
    });
};

const changePassword = async (req, res) => {
  const id = req.params.id;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 16);

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteuser = (req, res) => {
  var id = req.params.id;
  userModel
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports = {
  createuser,
  getusers,
  getUserById,
  updateuser,
  deleteuser,
  login,
  changePassword,
};
