let assert = require("assert");
let greet = require("../greet");

describe('this should test the greet function', function () {
    it('Should greet bob', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
       
    });
    it('Should greet Sam', function () {
         assert.equal(greet('Sam'), 'Hello, Sam');
    });


});