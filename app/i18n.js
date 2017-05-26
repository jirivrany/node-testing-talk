
let mapping = {
    'hello': {
        'en': 'hello',
        'cs': 'ahoj'
    },
    'beer': {
        'en': 'beer',
        'cs': 'pivo'
    }
};

module.exports.translate = function translate(phrase, lang) {
    let phraseMap = mapping[phrase];
    
    if (!phraseMap) {
        return phrase;
    }
    
    return phraseMap[lang] || phrase;
};
