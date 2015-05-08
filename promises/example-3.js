var p1;
var settledPromise;

p1 = new Promise (function(resolve, reject) {
	resolve();
});

var setteldePromis = p1.then(function(data){
			return "Success";
		}).catch(function(err){
			return "Error";
		});

console.log(setteldePromis._detail); // Will log "Success" in the browser and "undefined" in node.