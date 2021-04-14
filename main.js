const express = require("express");
const app = express();

const url = "https://"

const fetch = require("node-fetch");
//https://swapi.dev/api/people/1
//settings
app.set("port", 3000)

//middlewares
app.use(express.json());

app.post("/star/:urlink", (req, res)=>{
    fetch(url.link + req.params.urlink)
        .then(promesaFetch => promesaFetch.json())
        .then(contenido => res.send(contenido))
   
        
})

app.listen(app.set("port"), () => {
    console.log("El servidor está inicializado en el puerto:", app.set("port"));
});