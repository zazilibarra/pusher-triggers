const app = require('./app');
const config = require('./config');

app.get('/',(req, res)=>{
		res.send(`API NODE LOGISTIKGO VERSIÓN:${process.env.npm_package_version}`);
	});

	app.listen(config.port, () => {
		console.log(`API REST JALANDO EN:${config.port}`);
})

//Esau
//Jorge
//Uriel
//Marco
