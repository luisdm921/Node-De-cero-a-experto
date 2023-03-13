const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "it is our base number",
  })
  .option("l", {
    alias: "listado",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Show table",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Set a limit",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
