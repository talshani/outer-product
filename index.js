
function outerProduct(dimensions) {
    if(!Array.isArray(dimensions)) throw new Error("Array expected");

    if(!dimensions.length) return [];

    var lengths = [];
    var l = dimensions.length;
    var invalidDimensions = [];
    var total = 1;
    var product = [[]];
    var i;
    for(i = 0; i < l; i++) {
        if(Array.isArray(dimensions[i])) {
            product = expandWith(product, dimensions[i]);
            var size = dimensions[i].length;
            lengths[i] = size;
            total *= size;
        } else {
            lengths[i] = null;
            invalidDimensions.push(i);
        }
    }

    if(invalidDimensions.length) {
        throw new Error("The following dimensions are invalid: " + invalidDimensions.join(', '))
    }

    return product;
}

function expandWith(product, dimension) {
    var l = dimension.length;
    var newProduct = [];
    for(var i = 0; i < l; i++) {
        var dimValue = dimension[i];
        var dimClone = clone(product);
        var n = dimClone.length;
        while(n--) {
            dimClone[n].push(dimValue);
        }
        newProduct = newProduct.concat(dimClone);
    }
    return newProduct;
}

function clone(product) {
    var l = product.length;
    var cloned = [];
    while(l--) {
        cloned[l] = Array.prototype.slice.call(product[l], 0);
    }
    return cloned;
}

module.exports = outerProduct;