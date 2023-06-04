var yargsParser = require("yargs-parser");
var flagPrefix = require("./flagPrefix");

function argvToOptions(argv) {
  return yargsParser(argv, {
    string: ["d", "dir", "url", "title"],
    number: ["width", "height", "w", "h"],
    boolean: ["h", "help"],
  });
}

function optionsToArgv(options) {
  var argv = [];
  if (options.d || options.dir) {
    argv.push(flagPrefix + "dir", options.d || options.dir);
  }
  if (options.url) {
    argv.push(flagPrefix + "url", options.url);
  }
  if (options.title) {
    argv.push(flagPrefix + "title", options.title);
  }
  if (options.width != null || options.w != null) {
    var width = options.width != null ? options.width : options.w;
    argv.push(flagPrefix + "width", width);
  }
  if (options.height != null || options.h != null) {
    var height = options.height != null ? options.height : options.h;
    argv.push(flagPrefix + "height", height);
  }
  if (options.help) {
    argv.push(flagPrefix + "help", options.help);
  }
  return argv;
}

module.exports = {
  argvToOptions,
  optionsToArgv,
};
