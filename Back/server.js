//Recuerda que todas las rutas locales para llammarlas seran desde aqui
const app = require('./app/index.js');
const port = 3000;

app.listen(port, () =>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});