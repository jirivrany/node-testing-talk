const fs = require('fs');
const assert = require('chai').assert;
const sinon = require('sinon');
const chai = require('chai');
const expect = require('chai').expect;
const i18n = require('../app/i18n');;

const phrases = '["hello","beer","I like beer"]';

describe('text module with mock only for fs module', function() {
    
    beforeEach(function () {
      this.sandbox = sinon.sandbox.create()
    })

    afterEach(function () {
      this.sandbox.restore()
    })

    
    
    it('should return correct translations from a file', function( done ) {
        
        const translate = require('../app/text');    
        
        const readFileStub = this.sandbox.stub(fs, 'readFile').callsFake(function (filePath, cb) {
          cb(null, phrases)
        });

        
        const result = translate(__dirname + '/phrases.json', 'cs', function(err, data) {
            
            if (err) { return done( err ); }
            

            expect(readFileStub).to.be.called;
            expect( data.length).to.equal(3);

            assert.equal( data.length, 3 );
            assert.deepEqual( data, ['ahoj', 'pivo', 'I like beer']  );
            done();
            
        } );

        
        
    });
});
