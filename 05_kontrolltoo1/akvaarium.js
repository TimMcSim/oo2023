/*interface Veeanum {
    pikkus: number;
    laius: number;
    korgus: number;
    veemaht: number;
    ruumala():number;
    paljuvett(): number;
}*/
var Akvaarium = /** @class */ (function () {
    function Akvaarium(pikkus, laius, korgus) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.korgus = korgus;
        this.mahtuvus = 0;
        this.veemaht = 0;
    }
    Akvaarium.prototype.ruumala = function () {
        this.mahtuvus = this.pikkus * this.laius * this.korgus;
        return console.log("Selle akvaariumi mahtuvus on " + this.mahtuvus + "cm3");
    };
    Akvaarium.prototype.lisavett = function (lisa) {
        this.veemaht += lisa;
    };
    Akvaarium.prototype.paljuvett = function () {
        return console.log("Selles akvaariumis hetkel on " + this.veemaht + "cm3 vett");
    };
    return Akvaarium;
}());
var minuAkva = new Akvaarium(10, 10, 10);
minuAkva.ruumala();
minuAkva.lisavett(100);
minuAkva.paljuvett();
