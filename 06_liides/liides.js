var AmdToEur = /** @class */ (function () {
    function AmdToEur() {
    }
    AmdToEur.prototype.convert = function (howMany, coeff) {
        return howMany * coeff;
    };
    AmdToEur.prototype.takeFrom = function () {
        return "AMD";
    };
    AmdToEur.prototype.takeTo = function () {
        return "EUR";
    };
    return AmdToEur;
}());
var EurToAmd = /** @class */ (function () {
    function EurToAmd() {
    }
    EurToAmd.prototype.convert = function (howMany, coeff) {
        return howMany * coeff;
    };
    EurToAmd.prototype.takeFrom = function () {
        return "EUR";
    };
    EurToAmd.prototype.takeTo = function () {
        return "AMD";
    };
    return EurToAmd;
}());
