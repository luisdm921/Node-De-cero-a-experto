const fs = require("fs");
const colors = require('colors')

const createFile = async (base = 5,listado=false,h) => {
  try {
    

    let salida = "";
    for (let i = 1; i <= h; i++) {
      const res = base * i;
      salida += `${base} x ${i} = ${res}\n`;
    }
    if(listado===true){
    console.log("======================".rainbow);
    console.log('      Tabla del: ', colors.green(base));
    console.log("======================".rainbow);
    console.log(salida)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};

//writefile async
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log(`tabla-${base}.txt creado`);
// });
