const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");

const server = express();
require("dotenv").config();
server.use(cors());

const port = 5001;
server.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})
