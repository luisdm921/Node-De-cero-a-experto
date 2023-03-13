const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createFile(argv.b, argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.white, "creado".green))
  .catch((err) => console.log(err));
