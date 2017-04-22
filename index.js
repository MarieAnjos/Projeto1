// ARQUIVO INICIAL

// Importando express
var express = require('express');
// Iniciando express
var server = express();

// Criando rota pro usuário
server.get('/', function(req,res){
    res.status(200).send({message:'Hello world User!'});
});

// Iniciando o Servidor
server.listen(3000, function(){
  console.log('Servidor iniciado');
});
