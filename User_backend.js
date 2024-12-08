const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require('cors'); 
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://Codeknight:Kishan@codeknight-database.ixilo.mongodb.net/User_Login");
const User = mongoose.model('Users', { name: String, email: String, password: String });
async function userExists(username, password) {
  const user = await User.findOne({ email: username });
  return user && user.password === password;
}
app.get("/signup", async function (req, res) {
  const username = req.query.username;
  const password = req.query.password;
  const name = req.query.name;

  const existingUser  = await User.findOne({ email: username });
  if (existingUser ) {
    return res.status(400).send('{"message": "User  already exists"}');
  }

  const user = new User({
    email: username,
    password: password,
    name: name
  });
  await user.save();
  res.send(`"Happy to see you onboard ${name}"`);
});
app.get("/signin", async function (req, res) {
  const username = req.query.username;
  const password = req.query.password;

  const user = await User.findOne({ email: username });
  if (!user || user.password !== password) {
    return res.status(403).send('{"message": "Invalid username or password"}');
  }
  return res.send(`"Welcome back, ${user.name}"`);
});
const PORT = process.env.PORT || 7050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});