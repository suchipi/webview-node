var child_process = require("child_process");
var opt = require("./options");
var binaryPath = require("./binaryPath");

module.exports = {
  binaryPath: binaryPath,
  optionsToArgv: opt.optionsToArgv,
  spawn: function spawn(options) {
    return child_process.spawn(binaryPath, opt.optionsToArgv(options), options);
  },
  spawnSync: function spawnSync(options) {
    return child_process.spawnSync(
      binaryPath,
      opt.optionsToArgv(options),
      options
    );
  },
  exec: function exec(options) {
    return child_process.execFile(
      binaryPath,
      opt.optionsToArgv(options),
      options
    );
  },
  execSync: function exec(options) {
    return child_process.execFileSync(
      binaryPath,
      opt.optionsToArgv(options),
      options
    );
  },
};
