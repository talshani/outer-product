var outerProduct = require('../index');
var chai = require('chai');
var expect = chai.expect;

chai.use(function (_chai, utils) {
    var Assertion = _chai.Assertion;

    Assertion.addMethod('outerProduct', function (b) {
        new Assertion(this._obj).to.be.instanceof(Array);
        var obj = outerProduct(this._obj);

        // second, our type check
        this.assert(
            myeq(obj, b)
            , "expected #{this} to be a permutation of #{exp}"
            , "expected #{this} to not be a permutation of of #{exp}"
            , b     // expected
            , obj   // actual
        );
    });

    function myeq(a, b) {
        var len = a.length;
        if (a.length != b.length) return false;

        a = a.map(function(item) {return item.join(', ')}).sort();
        b = b.map(function(item) {return item.join(', ')}).sort();
        for(var i = 0; i < len; i++) {
            if(a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
});


describe("permute", function() {
    it("should have an empty permutation", function() {
        expect([]).to.outerProduct([]);
    });

    it("should build the outer product", function() {
        expect([[1, 2], [3]]).to.outerProduct([[2, 3], [1, 3]]);
    });

    it("should return unique values for unique arrays", function() {
        var items = outerProduct([[1, 2], [3], ['a', 'b']])
                .map(function(item) {
                    return item.join('-')
                });
        var unique = items.filter(function(item, pos) {
            return items.indexOf(item) == pos;
        });
        expect(unique.length).to.equal(items.length);
    });

    it("should build the outer product for 3 vectors", function() {
        expect([[1, 2], [3], ['a', 'b']]).to.outerProduct([[1, 3, 'a'], [1, 3, 'b'], [2, 3, 'a'], [2, 3, 'b']]);
        expect([[1, 2], [3], ['a', 'b']]).to.not.outerProduct([[1, 3, 'a'], [1, 3, 'b'], [2, 3, 'a'], [2, 3, 'XXX']]);
    });

    it("should not fail", function() {
        var vectors = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']];
        var x = outerProduct(vectors);
        expect(x).to.be.ok;
    });
});

