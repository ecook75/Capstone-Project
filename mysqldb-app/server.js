const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my MySQL application." });
});


let runningMethodRoutes = require('./routes/runningMethodRoutes');
app.use('/api/running', runningMethodRoutes);
let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Controllers.userController.storeUsers(req.body, res)



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});