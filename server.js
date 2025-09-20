const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
