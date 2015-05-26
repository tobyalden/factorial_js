describe('factorial', function() {

    it("it returns 1 given 1", function() {
        expect(factorial(1)).to.equal(1);
    });

    it("it returns the factorial of n given n", function() {
        expect(factorial(5)).to.equal(120);
    });

});
