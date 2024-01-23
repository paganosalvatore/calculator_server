const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname)) //serve a caricare  i file statici (css,js,immagini etc) della stessa cartella
//app.use(express.json()); //per la POST
//app.use(express.urlencoded({extended: true}));

app.get(`/`,(req,res) =>{  //get perche il browser richiede sempre dati 
    res.sendFile(__dirname + `/` + "compito_calc.html")
});

app.get("/calc", (req,res) =>{
    const display = req.query.display;
    let result = eval(display);
    let json_result = {
        "display": display,
        "result": result
    }
    res.send(json_result);
})

app.listen(port, ()=> {
    console.log(`the port is ${port}`);
    
});
