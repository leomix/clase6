const express = require('express')
const contenedor = require("./contenedor.js");
module.exports = contenedor;
let contenedor1 = new contenedor('productos.txt')

const app = express()

const PORT = process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    console.log(`servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error',error=> console.log(`error en el servidor ${error}`))

app.get('/productos',async (req,res)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(await contenedor1.getAll(), null, 4));
})

app.get('/productoRandom',async (req,res)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(await contenedor1.getRandom(), null, 4));
})
