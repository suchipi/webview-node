var yargsParser = require("yargs-parser");

function argvToOptions(argv) {
  return yargsParser(argv, {
    string: ["d", "dir", "url", "title"],
    number: ["width", "height", "w", "h"],
    boolean: ["h", "help"],
  });
}

function optionsToArgv(options) {
  var argv = [];
  if (options.d) {
    argv.push("-d", options.d);
  }
  if (options.dir) {
    argv.push("--dir", options.dir);
  }
  if (options.url) {
    argv.push("--url", options.url);
  }
  if (options.title) {
    argv.push("--title", options.title);
  }
  if (options.w) {
    argv.push("-w", options.w);
  }
  if (options.width) {
    argv.push("--width", options.width);
  }
  if (options.h) {
    argv.push("-h", options.h);
  }
  if (options.height) {
    argv.push("--height", options.height);
  }
  if (options.help) {
    argv.push("--help", options.help);
  }
  return argv;
}

module.exports = {
  argvToOptions,
  optionsToArgv,
};
