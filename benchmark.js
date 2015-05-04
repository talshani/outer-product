var Benchtable = require('benchtable');
var outerProduct = require('./index');
var outerProduct1 = require('./variants/code_1');
var outerProduct2 = require('./variants/code_2');
var outerProduct3 = require('./variants/code_3');
var Table = require('cli-table');

var suite = new Benchtable();
console.log('Starting up');
suite
    .addFunction('main', function(ar) {
        outerProduct.call(null, ar);
    })
    .addFunction('code 1', function(ar) {
        outerProduct1.call(null, ar);
    })
    .addFunction('code 2', function(ar) {
        outerProduct2.call(null, ar);
    })
    .addFunction('code 3', function(ar) {
        outerProduct3.call(null, ar);
    })
    .addInput('small', [
        [[1, 2], [3]]
    ])
    //.addInput('large', [[[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']]])
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
        console.log(this.table.toString());
    })
    .on('error', function() {
        console.error(arguments[0]);
    })
    .run({ 'async': true });

