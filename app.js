var express = require('express'); //importa a biblioteca expres para o node
var app = express(); //instancia o express

app.set('view engine', 'ejs'); //setando o renderizador de viwews o ejs

app.get('/', function(req, res){ // criando rota /teconologia com GET
    res.render("home/index"); //envia uma reponse
});
app.get('/formulario_inclusao_noticia', function(req, res){ // criando rota /teconologia com GET
    res.render("admin/form_add_noticia"); //envia uma reponse
});
app.get('/noticias', function(req, res){ // criando rota /teconologia com GET
    res.render("noticias/noticias"); //envia uma reponse
});


app.listen(3000, function(){ //Criando server na porta 3000
  console.log("server com express iniciado");//informando que o Server foi iniciado com sucesso
});
