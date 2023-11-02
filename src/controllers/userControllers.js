const User = require("../models/userModels");
const DOMAIN = "http://localhost:5000";

// Function to add a user
const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const file = req.file;

    const userData = {
      name,
      email,
      phone,
    };

    if (file) {
      const image = DOMAIN + "/public/images/" + file.filename;
      userData.image = image;
    }

    const user = new User(userData);
    await user.save();

    res.status(201).json({
      message: "User added successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//function to get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ msg: "All users fetched successfully", users });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//function to get a single user by id
const getUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    res.status(200).json({ msg: "User fetched successfully", user });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// function to update a user by an user id
const updateUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const { name, email, phone } = req.body;
    const file = req.file;

    const userData = {
      name,
      email,
      phone,
    };

    if (file) {
      const image = DOMAIN + "/public/images/" + file.filename;
      userData.image = image;
    }

    const user = await User.findByIdAndUpdate(user_id, userData, { new: true });
    res.status(200).json({ msg: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// function to delete a user by an user id
const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findByIdAndDelete(user_id);
    res.status(200).json({ msg: "User deleted successfully", user });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
