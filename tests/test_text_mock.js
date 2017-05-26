const fs = require('fs');
const assert = require('chai').assert;
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = require('chai').expect;
const i18n = require('../app/i18n');

const phrases = '["hello","beer","I like beer"]';

describe('text module with mock', function() {
    
    
    
    before(function () {
      chai.use(sinonChai)
    })

    beforeEach(function () {
      this.sandbox = sinon.sandbox.create()
    })

    afterEach(function () {
      this.sandbox.restore()
    })

    
    
    it('should return correct translations from a file', function( done ) {
        
        const text = require('../app/text');    
        
        const readFileStub = this.sandbox.stub(fs, 'readFile').callsFake(function (filePath, cb) {
          cb(null, phrases);
        });

        const translateStub = this.sandbox.stub(i18n, 'translate').returns("foo");
        

        const result = text(__dirname + '/phrases.json', 'cs', function(err, data) {
            
            if (err) { return done( err ); }
            

            expect(readFileStub).to.be.called;
            expect(translateStub).to.be.called;

            expect( data.length).to.equal(3);
            
            assert.equal( data.length, 3 );
            assert.deepEqual( data, ['foo', 'foo', 'foo']  );
            done();
            
        } );

        
        
    });
});
