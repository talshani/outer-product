function outerProduct(dimensions) {
    if (!Array.isArray(dimensions)) throw new Error("Array expected");
    if(!dimensions.length) return [];

    var results = [];
    var dimsCount = dimensions.length;
    var i;
    // the size of each dimension
    var sizes = [];
    // the position of each dimension
    var positions = [];
    var position;
    var result;
    var total = 1;
    var dim;
    var lastDimOverflowed;

    var l = dimsCount;
    while (l--) {
        positions[l] = 0;
        sizes[l] = dimensions[l].length;
        total *= sizes[l];
    }

    for (i = 0; i < total; i++) {
        result = [];
        lastDimOverflowed = true;
        for (dim = 0; dim < dimsCount; dim++) {
            position = positions[dim];
            result.push(dimensions[dim][position]);
            if(lastDimOverflowed) {
                position = (position + 1) % sizes[dim];
                positions[dim] = position;
                lastDimOverflowed = position == 0;
            }
        }
        results.push(result);
    }

    return results;
}
module.exports = outerProduct;