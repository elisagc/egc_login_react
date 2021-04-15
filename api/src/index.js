const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/index"));

app.listen(4000);
console.log("servidor en puerto 4000");
