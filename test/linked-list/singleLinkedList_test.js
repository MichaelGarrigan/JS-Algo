
const expect = require('chai').expect;

const { initSLL } = require('../../data-structures/linked-list/singleLinkedList.js');


describe('Single Linked List', function() {
  describe('initSLL', function() {
    it(
      'should return an object when argument not an array', 
      function() { 
        expect(initSLL()).to.be.a('object');
        expect(initSLL({})).to.be.a('object');
        expect(initSLL('')).to.be.a('object');
        expect(initSLL('cat')).to.be.a('object');
        expect(initSLL(null)).to.be.a('object');
        expect(initSLL(undefined)).to.be.a('object');
        expect(initSLL(4)).to.be.a('object');
       }
    );
    it(
      'should return an object when argument is an empty array', 
      function() { expect(initSLL([])).to.be.a('object'); }
    );
    it(
      'should return an object with "sentinalTop" and "sentinalBottom" properties when argument is an empty array', 
      function() { 
        expect(initSLL([])).to.have.property('sentinalTop');
        expect(initSLL([])).to.have.property('sentinalBottom'); 
      }
    );
    it(
      'should return an object with 4 properties when argument is [1,2]', 
      function() { 
        const keys = Object.keys(initSLL([1,2]));
        expect(keys.length).to.equal(4);
        expect(keys.length).to.equal(4); 
      }
    );
    it(
      'should return an object with "sentinalTop" and "sentinalBottom" properties when argument is [1,2]', 
      function() { 
        expect(initSLL([1,2])).to.have.property('sentinalTop');
        expect(initSLL([1,2])).to.have.property('sentinalBottom'); 
      }
    );
  });
});