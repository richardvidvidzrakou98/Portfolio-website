const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.get("/health", (_req, res) => {
  res.json({ status: "ok", hostname: HOSTNAME });
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT} (pod: ${HOSTNAME})`);
});
