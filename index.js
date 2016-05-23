

if (process.argv < 2) 
	console.log('must have more than 2 argument');

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
var c = a + b;
console.log('Total result = ' + c);
