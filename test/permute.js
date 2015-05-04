var outerProduct = require('../index');
var expect = require('chai').expect;

describe("permute", function() {
    it("should have an empty permutation", function() {
        expect(outerProduct([])).to.deep.equal([]);
    });

    it("should build the outer product", function() {
        expect(outerProduct([[1, 2], [3]])).to.deep.equal([[2, 3], [1, 3]]);
    });

    it("should return unique values for unique arrays", function() {
        var items = outerProduct([[1, 2], [3], ['a', 'b']])
                .map(function(item) {
                    return item.join('-')
                });
        unique = items.filter(function(item, pos) {
            return items.indexOf(item) == pos;
        });
        expect(unique.length).to.deep.equal(items.length);
    });

    it("should build the outer product for 3 vectors", function() {
        expect(myeq(
            outerProduct([[1, 2], [3], ['a', 'b']]),
            [[1, 3, 'a'], [1, 3, 'b'], [2, 3, 'a'], [2, 3, 'b']]
        )).to.be.ok;
    });

    it("should not fail", function() {
        var vectors = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']];
        var x = outerProduct(vectors);
        expect(x).to.be.ok;
    });
});

function myeq(a, b) {
    var len = a.length;
    if (a.length != b.length) return false;
    var al = len;
    console.log(a)
    console.log(b)
    while (al--) {
        var found = false;
        var bl = len;
        var aItem = a[al].join('-');
        while (!found && bl--) {
            found = aItem == b[bl].join('-');
            console.log(found, aItem, b[bl].join('-'));
        }
        if (!found) {
            return false;
        }
    }
    return true;
}