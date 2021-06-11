const express = require('express');
const passport = require("passport");
require('./auth')(passport);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // req es la request, la petición
  // res es la respuesta
  res.status(200).send('Hello World!')
});

app.post('/login', (req, res) =>{
  // Comprobamos credenciales
  // Si no son validas, error
  // Si son validas, generamos un JWT y lo devolvemos
  res.status(200).json(
    {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ'}
  )
});

app.post('/team/pokemons', ()=>{
  res.status(200).send('Hello World!')
})

app.get('/team', 
  passport.authenticate('jwt', {session: false}), 
  (req,res,next) => {
    res.status(200).send('Hello World!')
})

app.delete('/team/pokemons/:pokeid', ()=>{
  res.status(200).send('Hello World!')
})

app.put('/team', ()=>{
  res.status(200).sed('Hello World!')
})

app.listen(port, () =>{
  console.log('Server started at port ' + port);
})

exports.app = app;
