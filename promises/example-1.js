var p1;
var settledPromise;

// Promise object takes one function which accepts two arguments

p1 = new Promise (function(resolve, reject) {
	resolve();
});

// Methods
// Promise.prototype.catch(onRejected)
// Promise.prototype.then(onFullFilled, onRejected)

p1.then(function(data){
	console.log("Success");
}).catch(function(err){
	console.log("Error");
});