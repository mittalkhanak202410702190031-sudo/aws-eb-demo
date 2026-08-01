const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "AWS Elastic Beanstalk LPU DEMO";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/info", (req, res) => {
  res.json({
    app: APP_NAME,
    status: "Running Successfully",
    platform: "AWS Elastic Beanstalk",
    framework: "Node.js + Express"
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
