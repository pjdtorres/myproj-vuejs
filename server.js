const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

//
app.use(express.static(__dirname + '/dist/'))

// responder a requisições feitas para o servidor web por meio da rota get
app.get('/', function(req, res){
    // res.send('Olá eu sou servidor web em Node com Express')
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(porta, function(){
    console.log('Servidor web rodando com express')
})