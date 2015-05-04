module.exports = function outerProduct(dimensions) {
    if (!Array.isArray(dimensions)) throw new Error("Array expected");
    if (!dimensions.length) return [];

    var results = [];
    var positions = [];
    var lengths = [];
    var skips = [];
    var i;
    var dimsCount = dimensions.length;
    var skipMul = 1;
    var dim;
    var result;
    var shouldSkip;
    var len;

    // prepare our states
    for (i = 0; i < dimsCount; i++) {
        var dimSize = dimensions[i].length;
        lengths[i] = dimSize;
        positions[i] = 0;
        skips.push(skipMul);
        skipMul *= dimSize;
    }

    // build product
    for (i = 0; i < skipMul; i++) {
        result = results[i] = [];
        for (dim = 0; dim < dimsCount; dim++) {
            shouldSkip = i % skips[dim] == 0;
            len = lengths[dim];
            if (shouldSkip) {
                positions[dim] = (positions[dim] + 1) % len;
            }
            result.push(dimensions[dim][positions[dim]]);
        }
    }

    return results;
};