var outerProduct = require('../index');
var expect = require('chai').expect;

describe("permute", function() {
    it("should have an empty permutation", function() {
        expect(outerProduct([])).to.deep.equal([]);
    });

    it("should build the outer product", function() {
        expect(outerProduct([[1, 2], [3]])).to.deep.equal([[1, 3], [2, 3]]);
    });

    it("should build the outer product for 3 vectors", function() {
        expect(outerProduct([[1, 2], [3], ['a', 'b']])).to.deep.equal([[1, 3, 'a'], [1, 3, 'b'], [2, 3, 'a'], [2, 3, 'b']]);
    });

    it("should not fail", function() {
        var vectors = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']];
        var x = outerProduct(vectors);
        expect(x).to.be.ok;
    });
});