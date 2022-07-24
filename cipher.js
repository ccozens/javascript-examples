class ShiftCipher {
    constructor(toShift) {
        this.toShift = toShift;
    }
    encrypt(str) {
        const lowerCaseStr = str.toLowerCase();
        let encrypted = '';
        for (let position in lowerCaseStr) {
            let char = lowerCaseStr[position];
            // test for letter
            let isLetter = char.match(/[a-z]|[A-Z]/g)
            if (!isLetter) {
                encrypted += char;
            }
            else {
                let charCode = lowerCaseStr.charCodeAt(position);
                let newCharCode = charCode - 32 + this.toShift;
                // alphabet end wrapping
                if (newCharCode >= 65 && newCharCode <= 90) {}
                else if (newCharCode < 65) { newCharCode = newCharCode + 26; } 
                else if (newCharCode > 90) { newCharCode = newCharCode - 26; }
                let newChar = String.fromCharCode(newCharCode);
                encrypted += newChar;
            }
        }
        return encrypted;
    }

    decrypt(str) {
        const upperCaseStr = str.toUpperCase();
        let decrypted = '';
        for (let position in upperCaseStr) {
            let char = upperCaseStr[position];
            // test for letter
            let isLetter = char.match(/[a-z]|[A-Z]/g)
            if (!isLetter) {
                decrypted += char;
            }
            else {
                let charCode = upperCaseStr.charCodeAt(position);
                let newCharCode = charCode + 32 - this.toShift;
                // alphabet end wrapping
                if (newCharCode >= 97 && newCharCode <= 122) { }
                else if (newCharCode < 97) { newCharCode = newCharCode + 26; }
                else if (newCharCode > 126) { newCharCode = newCharCode - 26; }
                let newChar = String.fromCharCode(newCharCode);
                decrypted += newChar;
            }
        }
        return decrypted;
    }
};



module.exports = class ShiftCipher {
    constructor(toShift) {
        this.toShift = toShift;
    }
    encrypt(str) {
        const lowerCaseStr = str.toLowerCase();
        let encrypted = '';
        for (let position in lowerCaseStr) {
            let char = lowerCaseStr[position];
            // test for letter
            let isLetter = char.match(/[a-z]|[A-Z]/g)
            if (!isLetter) {
                encrypted += char;
            }
            else {
                let charCode = lowerCaseStr.charCodeAt(position);
                let newCharCode = charCode - 32 + this.toShift;
                if (newCharCode >= 65 && newCharCode <= 90) {}
                else if (newCharCode < 65) { newCharCode = newCharCode + 26; }
                else if (newCharCode > 90) { newCharCode = newCharCode - 26; }
                let newChar = String.fromCharCode(newCharCode);
                encrypted += newChar;
            }
        }
        return encrypted;
    }

    decrypt(str) {
        const upperCaseStr = str.toUpperCase();
        let decrypted = '';
        for (let position in upperCaseStr) {
            let char = upperCaseStr[position];
            // test for letter
            let isLetter = char.match(/[a-z]|[A-Z]/g)
            if (!isLetter) {
                decrypted += char;
            }
            else {
                let charCode = upperCaseStr.charCodeAt(position);
                let newCharCode = charCode + 32 - this.toShift;
                if (newCharCode >= 97 && newCharCode <= 122) { }
                else if (newCharCode < 97) { newCharCode = newCharCode + 26; }
                else if (newCharCode > 126) { newCharCode = newCharCode - 26; }
                let newChar = String.fromCharCode(newCharCode);
                decrypted += newChar;
            }
        }
        return decrypted;
    }
};