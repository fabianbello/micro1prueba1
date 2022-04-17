

// requiero framework de expressy guardo en una constante
const express = require('express');
// modulo para ver las peticiones http
const morgan = require('morgan');
// ejecuto poro medio de funcion y lo guardo en app
const app = express();

// utliza el modulo morgan y su metodo dev 
app.use(morgan('dev'));

// app usa las rutas que estan en la carpeta routes dentro de index
app.use(require('./routes/index'));

// como lo usare en index entonces hay que exprotar el objeto que permite inicializar servidor
module.exports = app;
