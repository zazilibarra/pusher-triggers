const Pusher = require('pusher');

let pusher_produccion = {
	appId: '574150',
	key: 'bddb7b77dc57eb707d5e',
	secret: '9f5005cfaaf86d331125',
	cluster: 'us2',
	encrypted: true
};

let pusher_demo = {
	appId: '584793',
	key: '2991d8ff33bdaffa4115',
	secret: '48656fef1bb254bffe08',
	cluster: 'us2',
	encrypted: true
};

module.exports = new Pusher(pusher_demo);