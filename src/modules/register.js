const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,

  },
  Phone: {
    type: Number,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },
  Gender : {
   type : String,
   required : true,
  }
});

const Register = new mongoose.model("Register" , employeeSchema);

module.exports = Register;
