// Genereator accepting values
function* genFun(){
	
	var name = yield "Hello World";

	return "Hello " + name; 
}

var gen = genFun();

// In correct way of sending values to the generator
console.log(gen.next("Kavit")); // { value: 'Hello World', done: false }
console.log(gen.next()); // { value: 'Hello undefined', done: true}

var gen = genFun();

// Correct way of sending values to the generator
console.log(gen.next()); // { value: 'Hello World', done: false }
console.log(gen.next("Kavit")); // { value: 'Hello Kavit', done: true}
