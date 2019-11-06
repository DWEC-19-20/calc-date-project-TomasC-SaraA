var assert = chai.assert,
    expect = chai.expect;


suite("Testing esDiaFiesta", function() {
    test("Test pasado", function() {
        expect(esDiaFiesta(new Date(2019, 9, 28))).to.equal(false);
    });
    test("Test pasado", function() {
        expect(esDiaFiesta(new Date(2019, 10, 1))).to.equal(true);
    });
});

suite("Testing calcWorkingDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 13), 14)).to.equal("3/12/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date(2019, 10, 30), -14)).to.equal("12/11/2019");
    });
});

suite("Testing getWorkingDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 13), new Date(2019, 11, 3))).to.equal(14);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date(2019, 10, 28), new Date(2019, 10, 8))).to.equal(14);
    });
});
