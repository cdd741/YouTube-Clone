const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/video");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

const app = express();
app.use(cors());
app.use(express.static("./public"));

app.use("/videos", (_req, _res, next) => {
  app.use("/videos", videoRoutes);
  next();
});

app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
