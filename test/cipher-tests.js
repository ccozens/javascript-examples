// import assert
const assert = require('assert');

// import cipher
const ShiftCipher = require('../cipher');




describe('Cipher(1)', () => {
    before(() => {
        cipherOne = new ShiftCipher(1);
    });
    
    describe('.encrypt', () => {
        it('returns upper case and next char in alphabet', () => {
            //setup
            const input = 'a';
            const expected = 'B';
            //exercise
            const actual = cipherOne.encrypt(input);
            //verify
            assert.strictEqual(expected, actual);
        });

        it('does not amend non-letter characters', () => {
            const input = 'a B ?74';
            const expected = 'B C ?74';
            const actual = cipherOne.encrypt(input);
            assert.strictEqual(expected, actual);
        });

        it('wraps around end of alphabet', () => {
            const input = 'xyz';
            const expected = 'YZA';
            const actual = cipherOne.encrypt(input);
            assert.strictEqual(expected, actual);
        })
    }
    );

    describe('.decrypt', () => {
        it('returns upper case and next char in alphabet', () => {
            //setup
            const input = 'B';
            const expected = 'a';
            //exercise
            const actual = cipherOne.decrypt(input);
            //verify
            assert.strictEqual(expected, actual);
        });

        it('does not amend non-letter characters', () => {
            const input = 'B C ?74';
            const expected = 'a b ?74';
            const actual = cipherOne.decrypt(input);
            assert.strictEqual(expected, actual);
        });

        it('wraps around end of alphabet', () => {
            const input = 'YZA';
            const expected = 'xyz';
            const actual = cipherOne.decrypt(input);
            assert.strictEqual(expected, actual);
        })
    }
    )
})

describe('Cipher(4)', () => {
    before(() => {
        cipherFour = new ShiftCipher(4);
    });
    
    describe('.encrypt', () => {
        it('returns upper case and next char in alphabet', () => {
            //setup
            const input = 'a';
            const expected = 'E';
            //exercise
            const actual = cipherFour.encrypt(input);
            //verify
            assert.strictEqual(expected, actual);
        });

        it('does not amend non-letter characters', () => {
            const input = 'a B ?74';
            const expected = 'E F ?74';
            const actual = cipherFour.encrypt(input);
            assert.strictEqual(expected, actual);
        });

        it('wraps around end of alphabet', () => {
            const input = 'xyz';
            const expected = 'BCD';
            const actual = cipherFour.encrypt(input);
            assert.strictEqual(expected, actual);
        })
    }
    );

    describe('.decrypt', () => {
        it('returns upper case and next char in alphabet', () => {
            //setup
            const input = 'B';
            const expected = 'x';
            //exercise
            const actual = cipherFour.decrypt(input);
            //verify
            assert.strictEqual(expected, actual);
        });

        it('does not amend non-letter characters', () => {
            const input = 'B C ?74';
            const expected = 'x y ?74';
            const actual = cipherFour.decrypt(input);
            assert.strictEqual(expected, actual);
        });

        it('wraps around end of alphabet', () => {
            const input = 'YZA';
            const expected = 'uvw';
            const actual = cipherFour.decrypt(input);
            assert.strictEqual(expected, actual);
        })
    }
    )
})

// check whether encrypt is a function
//  describe("ShiftCiper", () {
//     const cipherOne = new ShiftCipher(1);
//  })