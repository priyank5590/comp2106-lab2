//link to connect
let connect = require('connect');
let url = require('url');


//create a new object
let app = connect();


//index page
let index = function (method, res, next) {
	res.end('Node.JS Simple Calculator');
};


let lab2 = function (req, res, next) {
	
	let qs = url.parse(req.url, true).query;
	let method = qs.method;
	let x = qs.x;
	let y = qs.y;
	

	if (method == 'add') {
		var add = parseInt(x) + parseInt(y);
		res.end(x + '+' + y + '=' + add);
		}

	else if (method == 'subtract') {
		var subtract = parseInt(x) - parseInt(y);
		res.end(x + '-' + y + '=' + subtract);
	}


	else if (method == 'multiply') {
		var multiply = parseInt(x) * parseInt(y);
		res.end(x + '*' + y + '=' + multiply);
	}

	else if (method == 'divide') {
		var divide = parseInt(x) / parseInt(y);
		res.end(x + '/' + y + '=' + divide);
	}

	else {
		res.end("Invalid Method");
	}
};


//start the connect http server
app.use('/lab2',lab2);
app.use('/', index);
app.listen(3000);
console.log('Connect server running on port 3000')