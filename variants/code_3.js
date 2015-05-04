function outerProduct(dimensions) {
    if (!Array.isArray(dimensions)) throw new Error("Array expected");
    return dimensions.reduce(product, []);
}

function product(a, b) {
    var result = [];
    if (!a.length) return b;
    if (!b.length) return a;

    if(Array.isArray(a[0])) {
        a.forEach(function(firstElement) {
            result = result.concat(b.map(function(secondElement) {
                return firstElement.concat(secondElement);
            }));
        })
    } else {
        a.forEach(function(firstElement) {
            result = result.concat(b.map(function(secondElement) {
                return [firstElement, secondElement];
            }));
        })
    }
    return result;
}

module.exports = outerProduct;