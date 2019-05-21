const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use("/api", api);

app.listen(process.env.PORT || 5000);