function outerProduct(dimensions) {
    if (!Array.isArray(dimensions)) throw new Error("Array expected");

    var l = dimensions.length;
    var product = [];
    var i;
    for (i = 0; i < l; i++) {
        product = twoProduct(product, dimensions[i]);
    }
    return product;
}

function twoProduct(a, b) {
    var result = [];
    var Al = a.length,
        Bl = b.length,
        i, j;
    if(!a.length) return b;
    if(!b.length) return a;
    for (i = 0; i < Al; i++) {
        for(j = 0; j < Bl; j++) {
            result.push([].concat(a[i]).concat(b[j]));
        }
    }
    return result;
}

module.exports = outerProduct;