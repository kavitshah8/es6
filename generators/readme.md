To use generators in node you should have node `v0.11.X` and you have to use `--harmony` flag as follows:
```
	nvm use v0.11.*
	node --harmony <example.js>
```

Methods for generators
```
	gen.next();
	gen.throw();
```

Popular generator runner library 

1. [co](https://github.com/tj/co)

Resources

1. James Moores [screencast](http://youtu.be/YrZyAn0yCb8) with practical use case and a useful pattern.
2. Marc Harter's [Blog](http://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/) with detailed exaplination.
