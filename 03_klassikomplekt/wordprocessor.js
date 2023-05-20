var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.etDict = ["kass", "koer", "lind"];
        this.enDict = ["cat", "dog", "bird"];
    }
    return Dictionary;
}());
var EtToEng = /** @class */ (function () {
    function EtToEng() {
        this.dict = new Dictionary();
    }
    EtToEng.prototype.translate = function (word) {
        var search = this.dict.etDict.includes(word);
        if (search == true) {
            return this.dict.enDict[this.dict.etDict.indexOf(word)];
        }
        else {
            return "Ei ole sõnastikus";
        }
    };
    EtToEng.prototype.inputLang = function () {
        return "ET";
    };
    ;
    EtToEng.prototype.outputLang = function () {
        return "ENG";
    };
    ;
    return EtToEng;
}());
var EngToEt = /** @class */ (function () {
    function EngToEt() {
        this.dict = new Dictionary();
    }
    EngToEt.prototype.translate = function (word) {
        var search = this.dict.enDict.includes(word);
        if (search == true) {
            return this.dict.etDict[this.dict.enDict.indexOf(word)];
        }
        else {
            return "Ei ole sõnastikus";
        }
    };
    EngToEt.prototype.inputLang = function () {
        return "ENG";
    };
    ;
    EngToEt.prototype.outputLang = function () {
        return "ET";
    };
    ;
    return EngToEt;
}());
