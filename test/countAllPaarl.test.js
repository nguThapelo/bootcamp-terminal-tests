let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('this should test the countAllPaarl function', function () {
    it('Should return 3 when the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" is passed as input', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        
         });
    it('Should return 2 when the string "CJ 345 123, CK 345, CJ 123" is passed as input', function () {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
       

    });
});