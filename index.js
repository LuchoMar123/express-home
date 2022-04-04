const express = require("express");
const path = require("path");

const app = express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.get("/productos",(req,res)=>{
    res.sendFile(path.join(__dirname + "/productos.html"))
})

app.get("/clientes",(req,res)=>{
    res.sendFile(path.join(__dirname + "/clientes.html"))
})


app.listen(9000, () =>{
    console.log("El servidor esta corriendo en el puerto: ", 9000);
});

