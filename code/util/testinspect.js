var util = require('util');
function test(a1,a2){
	return a1+a2;
}
var parent = new Object();
parent.name = 'parent';
parent.func = test;
var child1 = new Object();
child1.name = 'child1';
parent.child = child1;
var child2 = new Object();
child2.name = 'child2';
child1.child = child2;
console.log(util.inspect(parent,{colors:true}));