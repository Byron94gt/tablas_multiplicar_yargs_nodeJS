const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
// colors/safe is to use for declarate variables with a color

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite).then(listarTabla => console.log(listarTabla))
        .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`El archivo fue creado exitosamene `,colors.green(archivo)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');
}

//show the default arguments
//let argv2 = process.argv;
//let parametro = argv[2];
//separate a sting limited for the character in the functiom
//let base= parametro.split('=')[1];




