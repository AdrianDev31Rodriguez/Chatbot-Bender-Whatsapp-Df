require("dotenv").config();
const express = require("express");
const route = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/bender", route);

app.listen(PORT, () => {
  console.log(`El puerto es: ${PORT}`);
});
