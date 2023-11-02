const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing spaces from the name before storing.
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
//   extra fields for image upload that is not mandatory for the assigned task
    image: {
        type: String,
        trim: true,
    },
    
});

const User = mongoose.model("User", userSchema);
module.exports = User;
