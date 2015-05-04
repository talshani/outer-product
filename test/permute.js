
var outerProduct = require('../index');
var expect = require('chai').expect;

describe("permute", function() {
    it("should have an empty permutation", function() {
        expect(outerProduct([])).to.deep.equal([]);
    })

    it("should build the outer product", function() {
        expect(outerProduct([[1,2], [3]])).to.deep.equal([[1,3], [2,3]]);
    })
});