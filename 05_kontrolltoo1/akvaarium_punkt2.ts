/*interface Veeanum {
	pikkus: number;
	laius: number;
	korgus: number;
	veemaht: number;
	ruumala():number;
	paljuvett(): number; 
}*/

class Akvaarium { //implements Veeanum {
	pikkus: number;
	laius: number;
	korgus: number;
	mahtuvus: number;
	veemaht: number;
	
	constructor (pikkus: number, laius: number, korgus: number) {
		this.pikkus = pikkus;
		this.laius = laius;
		this.korgus = korgus;
		this.mahtuvus = 0;
		this.veemaht = 0;
	}
	
	ruumala(){
		this.mahtuvus = this.pikkus*this.laius*this.korgus
		return console.log("Selle akvaariumi mahtuvus on " + this.mahtuvus + "cm3");
	}
	
	lisavett(lisa: number): void{
		this.veemaht+=lisa;
	}
	
	paljuvett(){
		return console.log("Selles akvaariumis hetkel on " + this.veemaht + "cm3 vett");
	}
}

let minuAkva = new Akvaarium(10, 10, 10);
minuAkva.ruumala();
minuAkva.lisavett(100);
minuAkva.paljuvett();