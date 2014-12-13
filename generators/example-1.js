// Creating a generator function
function* genFun(){
	return "Hello World";
}

// Calling a generator function returns an iterator object.
console.log(genFun()); // {}

// An iterator object has next method defined on it.
// Calling next will execute the generator function.
console.log(genFun().next()); // { value: 'Hello World', done: true}