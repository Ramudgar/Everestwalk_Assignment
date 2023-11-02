const express = require("express");
const router = express.Router();
// importing addUser function from userControllers.js
const { addUser } = require("../controllers/userControllers");
const { getUsers } = require("../controllers/userControllers");
const { getUserById } = require("../controllers/userControllers");
const { updateUser } = require("../controllers/userControllers");
const { deleteUser } = require("../controllers/userControllers");
// importing image from uploadServices.js
const { userImage } = require("../services/uploadServices");

/**
 * @description To add user
 * @api /api/users/addUser (look at index.js to see the full path of this api endpoint i.e. http://localhost:5000/api/users/addUser)
 * @access public
 * @type POST
 * @return  message, user
 * */

router.post("/addUser", userImage.single("image"), addUser);

/**
 * @description To get all users
 * @api /api/users/getUsers (look at index.js to see the full path of this api endpoint i.e. http://localhost:5000/api/users/getUsers)
 * @access public
 * @type GET
 * @return  message, users
 * */
router.get("/getUsers", getUsers);

/**
 * @description To get a single user by id
 * @api /api/users/getUserById/:id (look at index.js to see the full path of this api endpoint i.e. http://localhost:5000/api/users/getUserById/:id)
 * @access public
 * @type GET
 * @return  message, single user by id
 * */
router.get("/getUserById/:id", getUserById);

/**
 * @description To update a user by an user id
 * @api /api/users/updateUser/:id (look at index.js to see the full path of this api endpoint i.e. http://localhost:5000/api/users/updateUser/:id)
 * @access public
 * @type PUT
 * @return  message, updated user
 */

router.put("/updateUser/:id", userImage.single("image"), updateUser);

/**
 * @description To delete a user by an user id
 * @api /api/users/deleteUser/:id (look at index.js to see the full path of this api endpoint i.e. http://localhost:5000/api/users/deleteUser/:id)
 * @access public
 * @type DELETE
 * @return  message, deleted user
 */
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
