const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const path = require("path");
const hbs = require("hbs");
const Register = require("./modules/register");
const { log } = require("handlebars");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));

// setting hbs file by set method
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.Password;
    const confirmPassword = req.body.ConfirmPassword;

    if (password === confirmPassword) {
      const registerEmployee = new Register({
        Fullname: req.body.fullname,
        Email: req.body.email,
        Phone: req.body.phone,
        Age: req.body.age,
        Password: req.body.password,
        ConfirmPassword: req.body.confirmpassword,
        Gender: req.body.gender,
      });

      const registered = await registerEmployee.save();
      res.status(201).render("index");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/login", (req, res) => {
  res.send("this is login page");
});

app.listen(port, () => {
  console.log(`running on ${port} port`);
});
