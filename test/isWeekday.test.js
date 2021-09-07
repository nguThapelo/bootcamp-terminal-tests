let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('this should test the isWeekday function', function () {
    it('Should return True if valid day of the week is passed as input', function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it('Should return False if week-end day is passed as input', function () {
        assert.equal(isWeekday('Saturday'), false);

    });

});
