// Creating a generator function
function* genFun(){

	// yield must return one value, also it can accept an optional argument
	yield "Hello World";
	return "Hello Universe";
}

// Calling next will enter the generator function it will be paused whenever it sees yield.
console.log(genFun().next());

// Calling next again will resume execution of the generator function from where it was paused.
// Here it recreates an iterator object so the generator will be paused at the first occurance of yield.
console.log(genFun().next());


// Below is the correct way to use generators. If you want to pause and resume it.

// gen will be an iterator object, which has next method define on it.
var gen = genFun();

// calling next will return the value returned by first yield
console.log(gen.next());

// calling next aging will resume the generator execution where it was stopped
console.log(gen.next());
