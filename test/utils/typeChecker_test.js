
const expect = require('chai').expect;

const typeChecker = require('../../utils/typeChecker.js');


describe('Type Checker function', function() {
  it(
    'should handle empty function call (no params)', 
    function() { expect(typeChecker()).to.equal('Undefined'); }
  );
  it(
    'should handle an object', 
    function() { expect(typeChecker({})).to.equal('Object'); }
  );
  it(
    'should handle an array', 
    function() { expect(typeChecker([])).to.equal('Array'); }
  );
  it(
    'should handle an array', 
    function() { expect(typeChecker(() => {})).to.equal('Function'); }
  );
  it(
    'should handle a string', 
    function() { expect(typeChecker('')).to.equal('String'); }
  );
  it(
    'should handle a number', 
    function() { expect(typeChecker(4)).to.equal('Number'); }
  );
  it(
    'should handle a boolean', 
    function() { expect(typeChecker(true)).to.equal('Boolean'); }
  );  
  it(
    'should handle a symbol', 
    function() { expect(typeChecker(Symbol(4))).to.equal('Symbol'); }
  );
  it(
    'should handle null', 
    function() { expect(typeChecker(null)).to.equal('Null'); }
  );
  it(
    'should handle undefined', 
    function() { expect(typeChecker(undefined)).to.equal('Undefined'); }
  );
 
});