'use strict'
const sql = require('mssql');
const db = require('./db'); 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '574150',
  key: 'bddb7b77dc57eb707d5e',
  secret: '9f5005cfaaf86d331125',
  cluster: 'us2',
  encrypted: true
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req, res)=>{
	res.send(`API PUSHER TRIGGERS LOGISTIKGO VERSIÓN:${process.env.npm_package_version}`);
});

app.post('/api/triggerpedido', async (req, res) => {

	let _idUsuario = parseInt(req.body.idusuario);	
	let _idPedido = req.body.idpedido;

	let currentPedido = await db.getPedido(_idPedido);
	let currentUsuario = await db.getUsuario(_idUsuario);

	console.log(currentUsuario);
	// console.log(currentPedido);

	let jsonResponse = {
		message: "update-evidencias",
		idPedido : _idPedido,
		delivery: currentPedido.Delivery,
		idcliente: currentPedido.IDClienteFiscal,
		usuario:{
			id:_idUsuario, nombre:currentUsuario.Nombre
		}
	}

	pusher.trigger('pedidos', 'update-evidencias', jsonResponse);

	res.send(`FINISH PUSHER`);	

});

module.exports = app
