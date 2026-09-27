const localtunnel = require("localtunnel");
const https = require("https");

function getPublicIp() {
  return new Promise((resolve) => {
    https.get("https://api.ipify.org", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data.trim()));
    }).on("error", () => resolve("Unknown"));
  });
}

(async () => {
  try {
    const ip = await getPublicIp();
    const tunnel = await localtunnel({ port: 3000 });

    console.log("==================================================");
    console.log("🚀 MEDIAHUB PUBLIC ONLINE TUNNEL IS ACTIVE!");
    console.log("🔗 Public Web URL: " + tunnel.url);
    console.log("🔑 Tunnel Password (if prompted): " + ip);
    console.log("==================================================");

    tunnel.on("close", () => {
      console.log("Tunnel closed");
    });
  } catch (err) {
    console.error("Tunnel error:", err);
  }
})();
