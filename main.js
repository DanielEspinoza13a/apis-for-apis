const express = require("express");
const app = express();

const fetch = require("node-fetch");

//middlewares
app.use(express.json());

app.post("/star", (req, res)=>{
    const hola = fetch("https://swapi.dev/api/people/1")
        .then(promesaFetch => promesaFetch.json())
        .then(contenido => res.send(contenido))
   

})

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});