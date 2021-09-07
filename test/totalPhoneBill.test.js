let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('this should test the totalPhoneBill function' , function(){
    it('should give us our total phone bill if we make 2 calls and send 3 smses' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
       
        
    });
    it('should give us our total phone bill if we make 1 call and send 2 smses' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
       
        
        
    });

it('should give us our total phone bill if we send 2 smses' , function(){
       
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
        
    });


});