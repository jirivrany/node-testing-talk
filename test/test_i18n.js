

var assert = require('chai').assert;

var translate = require('../app/i18n').translate;


describe('translate', function() {
    it('should return correct translation if available', function() {
        
        assert( translate('hello'), 'hello' );
        assert( translate('hello', 'en'), 'hello' );
        assert( translate('hello', 'cs'), 'ahoj' );
        assert( translate('beer', 'cs'), 'pivo' );
        
    });
    
    it('should return the input on a missing phrase', function() {
        
        assert.equal( translate('foobar'), 'foobar' );
        assert.equal( translate('foobar', 'cs'), 'foobar' );
        assert.equal( translate('beer', 'jp'), 'beer' );
        
    });
    
    /*
    it('should handle mixed case', function() {
        
        assert.equal(translate('Beer'), 'pivo');
        
    });
    */
});
