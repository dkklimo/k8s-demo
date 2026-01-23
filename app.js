const http = require("http");

const PORT = 3000;

// Read from environment variables (from ConfigMap)
const MESSAGE = process.env.APP_MESSAGE || "Hello from Docker & Kubernetes 🚀";
const ENV = process.env.APP_ENV || "UNKNOWN";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`${MESSAGE} — ${ENV} — Version 3 🔁\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
