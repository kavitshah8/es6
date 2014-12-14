function* genFun(){

	// yield(or return) must return a value, if ommited then returns undefined
	yield "Hello World";

	return "Hello Universe";
}

// Incorrect way to use generators :

// Calling next will enter the generator function it will be paused whenever it sees yield.
console.log(genFun().next()); // { value: 'Hello World', done: false }

// Calling next again should resume execution of the generator function from where it was paused.
// Here it recreates an iterator object again, hence it will not restart from where it was paused.
console.log(genFun().next()); // { value: 'Hello World', done: false }

// Correct way to use generators :

// gen will be an iterator object, which has next method define on it.
var gen = genFun(); 

console.log(gen); // {}

// calling next will return the value returned by first yield
console.log(gen.next()); // { value: 'Hello World', done: false}

// calling next aging will resume the generator execution where it was stopped
console.log(gen.next()); // { value: 'Hello Universe', done: false}