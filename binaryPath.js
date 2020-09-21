var path = require("path");

var binaryPath;
if (process.platform === "win32") {
  binaryPath = path.join(__dirname, "bin", "windows-amd64", "launcher.exe");
} else if (process.platform === "darwin") {
  binaryPath = path.join(__dirname, "bin", "darwin-amd64", "webview");
} else if (process.platform === "linux") {
  binaryPath = path.join(__dirname, "bin", "linux-amd64", "webview");
} else {
  throw new Error("Unsupported platform: " + process.platform);
}

module.exports = binaryPath;
