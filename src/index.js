// aqui lo utilizo el archivo app pa arrancar servidor
const app = require('./app'); 


// desde app utilizare el metodo listen y mostrare mensaje por consoloa
async function main(){

    const PORT = process.env.PORT || 4000


    // await porque es un metodo asincrono
    await app.listen(PORT,function(){

        console.log('server is running', PORT);
        
    })

}

// ejecuta main
main();