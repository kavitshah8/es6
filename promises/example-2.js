var p1;
var settledPromise;

p1 = new Promise (function(resolve, reject) {
	resolve();
	reject(); // It will not be called
});

p1.then(function(data){
	console.log("Success");
}).catch(function(err){
	console.log("Error");
});