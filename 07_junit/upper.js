var Vowel = /** @class */ (function () {
    function Vowel() {
        this.letterList = ["a", "e", "i", "o", "u", "w", "y"];
        this.oneByOne = [];
    }
    Vowel.prototype.toUpper = function (word) {
        for (var i = 0; i < word.length; i++) {
            this.oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
        }
        return this.oneByOne.join("");
    };
    return Vowel;
}());
var Consonant = /** @class */ (function () {
    function Consonant() {
        this.letterList = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
        this.oneByOne = [];
    }
    Consonant.prototype.toUpper = function (word) {
        for (var i = 0; i < word.length; i++) {
            this.oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
        }
        return this.oneByOne.join("");
    };
    return Consonant;
}());
/*export {
    Vowel,
    Consonant
}*/ 
