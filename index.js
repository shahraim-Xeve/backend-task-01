const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const db = require("./config/mongoUri.js");
const app = express();

db.connection
  .once("open", () => console.log("database connected"))
  .on("error", (err) => console.log("database not connected ", err));

app.listen(6246, () => {
  console.log(`Example app listening on port ${6246}`);
});

app.use(express.json());
app.use(cors());
app.use("/", routes);
