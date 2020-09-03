'use strict';
console.log('Truth table for conjunction');

var var1 = true;
var var2 = true;
var var3 = false;
console.log(var1 + '\t' + !var3 + '\t' + !var3);
console.log(var1 + '\t' + !var2 + '\t' + !var2);
console.log(var3 + '\t' + !var3 + '\t' + !var1);
console.log(var3 + '\t' + !var2 + '\t' + !var2);