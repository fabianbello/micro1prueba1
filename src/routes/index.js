
// requiero framework de expressy guardo en una constante
const {Router} = require('express');

// desde exprees quiero su metodo router para crear rutas
const router = Router();


// crear ruta... ruta inicial y cuando la visiten, toma la info de la peticion y respuesta y retonra un json con el mensaje
router.get('/', (req, res) => res.json({message: 'Hello world'}));

// exporto el objeto
module.exports = router;
