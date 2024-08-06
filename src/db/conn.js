const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registration")
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));

  
