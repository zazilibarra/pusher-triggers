'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '574150',
  key: 'bddb7b77dc57eb707d5e',
  secret: '9f5005cfaaf86d331125',
  cluster: 'us2',
  encrypted: true
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
	res.send(`API PUSHER TRIGGERS LOGISTIKGO VERSIÓN:${process.env.npm_package_version}`);
});

app.get('/api/triggerpusher', (req, res) => {

	pusher.trigger('my-channel', 'my-event', {
	  "message": "test pusher"
	});

	res.send(`FINISH PUSHER`);

});

app.post('/api/triggerpusher', (req, res) => {

	let _idUsuario = parseInt(req.body.idusuario);
	let _idPedido = req.body.idpedido;

	pusher.trigger('my-channel', 'my-event', {
	  "message": `${_idPedido} , ${_idUsuario}`
	});

	res.send(`${_idPedido} , ${_idUsuario}`);

});


module.exports = app
