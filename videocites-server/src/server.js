const express = require("express");
const router = require("../routes/routes");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started!");
});
