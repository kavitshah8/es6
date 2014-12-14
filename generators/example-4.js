function* genFun(){
	var i = 0;
	while(true)
		yield i++;
}

var gen = genFun();
console.log(gen.next()); // { value: 0, done: false}
console.log(gen.next()); // { value: 1, done: false}
console.log(gen.next()); // { value: 2, done: false}