/**
 * Calculates the outer product of the dimension array.
 * The output will be a collection of array that each is composed of all dimensions.
 * @example
 * // returns [['a', 1], ['b', 1], ['a', 2], ['b', 2]]
 * require('outer-product')([['a', 'b'], [1, 2]])
 * @param {Array.<Array>} dimensions
 * @returns {Array.<Array>} Combinations of all dimensions
 */
module.exports = function outerProduct(dimensions) {
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
};