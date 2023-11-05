const https = require("https");
const selfSigned = require("openssl-self-signed-certificate");
const app = require("./app");
require("dotenv").config()

const PORT = process.env.PORT || 5000

const selfSignedOptions = {
  key: selfSigned.key,
  cert: selfSigned.cert,
};
const server = https.createServer(selfSignedOptions, app);

server.listen(PORT, () => console.log(`Https server started and is listening on https://localhost:${PORT}`))
