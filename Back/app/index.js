const express = require('express');
const app = express();

app.use(express.json());
module.exports = app;

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en el puerto ${port}`);
// });
