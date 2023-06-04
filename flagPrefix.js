var flagPrefix;
if (process.platform === "win32") {
  flagPrefix = "/"
} else {
  flagPrefix = "--"
}

module.exports = flagPrefix;
