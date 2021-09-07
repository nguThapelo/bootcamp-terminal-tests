let assert = require("assert");
let transportFee = require("../transportFee");

describe('this should test the transportFee function', function () {
    it('should tell us how much transport is, if we working the morning shift', function () {
        assert.equal(transportFee('morning'), 'R20');


    });
    it('should tell us how much transport is, if we working the afternoon shift', function () {

        assert.equal(transportFee('afternoon'), 'R10');

    });
    it('should tell us transport is free, if we working nightshift', function () {

        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});