const express = require("express");
const cors = require ("cors");
const app = express();

require("dotenv").config();
let dbConnect = require("./dbConnect");

const corsOptions = {
    origin: ["http://192.168.1.73:5173","http://localhost:5500", "http://localhost:5173"],
};
app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my MySQL application." });
});


let runningMethodRoutes = require('./routes/runningMethodRoutes');
app.use('/api/running', runningMethodRoutes);

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

let commentRoutes = require('./routes/commentRoutes');
app.use('/api/comments', commentRoutes);

let likeRoutes = require('./routes/likeRoutes');
app.use('/api/likes', likeRoutes);




//Controllers.userController.storeUsers(req.body, res)



// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});