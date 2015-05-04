var assert = require('assert');

function outerProduct(dimensions) {
    if (!Array.isArray(dimensions)) throw new Error("Array expected");
    if(!dimensions.length) return [];
    return dimensions.reduce(product);
}
function product(a, b) {
    var result = [];
    var used = [];
    if (Array.isArray(a[0])) {
        a.forEach(function(firstElement) {
            result = result.concat(product(firstElement, b));
        })
    } else {
        a.forEach(function(firstElement) {
            result = result.concat(b.map(function(secondElement) {
                if (used.indexOf(firstElement) === -1){
                    used.push(firstElement);
                    return [firstElement, secondElement];
                }else return [];
            }))
        });
    }
    return result;
}

module.exports = outerProduct;