http.createServer( function(req, res){ //cria um servidor web com uma função do http

    var categoria = req.url; //recupera a URL da requisição

    //Criando Rotas
    if (categoria == '/tecnologia'){ //URL == /teconologia
      res.end("<html><body>tecnologia</body></html>"); //envia uma reponse
    } else if (categoria == '/moda'){ // URL == /moda
      res.end("<html><body>moda</body></html>"); //envia uma reponse
    } else { // URL == //todas as outras
    res.end("<html><body>teste</body></html>"); //envia uma reponse
  }

}).listen(3000);//informa ao servidor que ele ficara escutando na porta 3000
