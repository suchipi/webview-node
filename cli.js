#!/usr/bin/env node
var child_process = require("child_process");
var binaryPath = require("./binaryPath");
var optionUtils = require("./options");

try {
  // Convert stuff like '--this' to '/this' on windows
  const argv = process.argv.slice(2);
  const options = optionUtils.argvToOptions(argv);
  const normalizedArgv = optionUtils.optionsToArgv(options);

  child_process.execFileSync(binaryPath, normalizedArgv, {
    cwd: process.cwd(),
  });
} catch (err) {
  process.exitCode = 1;
}
