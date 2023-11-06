require('dotenv').config();// para cargar el archivo .env; variables de entorno para los puertos; si no existe puerto configurado va usar la variable port, pero si existe, va a usar el que ofrezca el hosting
const express = require('express')//este código es de la pagina de npm express y de la página oficial de express
const hbs = require('hbs');//conecto la dependencia hbs
const app = express()
const port = process.env.PORT;
//invoco la dependencia express a través de app
app.set('view engine', 'hbs');//le digo a express que voy a usar este template handlebars, para darle dinamismo a la página

// Código para establecer la rutas de las vistas parciales
hbs.registerPartials(__dirname + '/views/partials');

// para poder ver el index de la carpeta public, debo indicarle la ruta; a esto se le llama servir contenido estático

//invoco la const app que contiene la dependencia express que use la carpeta pública; static es Un Middleware que tiene como propósito tomar dos piezas de la aplicación y conectarlas, como un puente en el que fluye la información; lo que sea que pongamos en la carpeta public será visto por los usuarios
app.use(express.static('public'));//también se llama ruta estática

// Para usar hbs, debemos tener separadas, vistas, modelo y controlador 👇 Éste sería el controlador; ¿cómo enviar información desde aquí y atraparla en el template, o home; puedo mandar un segundo argumento que son las opciones
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Samuel Daza',
        titulo: 'Curso de Node'
    });//para renderizar la vista
});

// Para eliminar la terminación .html de las vistas de generic
/* app.get('/generic', (req, res) => {
    // El sendFile, significa enviar un archivo que se encuentra ahí
    res.sendFile(__dirname + '/public/generic.html')//el dirname es toda la ruta donde esté instalada la aplicación o donde esté corriendo
}); */

// Para eliminar la terminación .html de las vistas de elements
/* app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
}); */

// Nuevas rutas para elements y generic hbs
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Samuel Daza',
        titulo: 'Curso de Node'
    });//para renderizar la vista
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Samuel Daza',
        titulo: 'Curso de Node'
    });//para renderizar la vista
});


/* ahora esta ruta 👇 nunca se va a ejecutar
app.get('/', function (req, res) {
    res.send('Home Page')
})
*/
//si quiero crear otras subrutas, en vez de la funcion tradicional se puede usar la función flecha
/* app.get('/hola-mundo', (req, res) => {
    res.send('hola mundo en su respectiva ruta')
}) */
// Con el comodín * cualquier ruta que ponga que no se encuentre, me lanzará el código de error 404
app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

//otra manera de pasar el puerto 8080 con una función flecha, tiene sus ventajas
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});