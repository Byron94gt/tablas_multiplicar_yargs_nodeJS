const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return
        }
        if (!Number(limite)) {
            reject(`${limite} no es un numero`);
            return
        }

        console.log("=================".green);
        console.log(`Tabla del ${base}`.green);
        console.log("=================".green);
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        resolve(data);

    });
}


let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return
        }
        if (!Number(limite)) {
            reject(`${limite} no es un numero`);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`files/tabla-del ${base}.txt`, data, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve("The file was saved!");

            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}