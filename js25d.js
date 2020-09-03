'use strict';
console.log('Truth table for disjunction');

var var1 = true;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + !var3 + '\t' + !var3);
console.log(var1 + '\t' + !var2 + '\t' + !var3);
console.log(var3 + '\t' + !var3 + '\t' + !var3);
console.log(var3 + '\t' + !var2 + '\t' + !var2);
