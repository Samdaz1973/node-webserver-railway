const express = require('express')//este código es de la pagina de npm express y de la página oficial de express
const app = express()
const port = 8080;

app.get('/', function (req, res) {
    res.send('Home Page')
})

//si quiero crear otras subrutas, en vez de la funcion tradicional se puede usar la función flecha
app.get('/hola-mundo', (req, res) => {
    res.send('hola mundo en su respectiva ruta')
})
// Con el comodín * cualquier ruta que ponga que no se encuentre, me lanzará el código de error 404
app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

//otra manera de pasar el puerto 8080 con una función flecha, tiene sus ventajas
app.listen(port, () => {
    console.log('Example app listening at http;//localhost:${port}')
});