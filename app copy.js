const http = require('http');//importamos de node el paquete http

// Crear el servidor
// request es la petición que se está solicitando de parte del cliente
//response es lo que se responde cuando se procesa la request
http.createServer((req, res) => {//la funcion http.createServer contiene un callback que se va a disparar con ciertos argumentos: request y response
    res.write('HOla Mundo');//son métodos que contiene el paquete res, y write
    res.end();//para decirle a node que ya terminé mi petición, si no se queda cargando
// si hago un console.log de la request se va a mover información de la web al cliente
console.log(req);

})
// con punto listen puedo indicar el puerto en que quiero que esté corriendo mi aplicación
.listen(8080); //es un puerto donde corren las aplicaciones

console.log('escuchando en el puerto', 8080);
