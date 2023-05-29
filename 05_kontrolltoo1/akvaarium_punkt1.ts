/*interface Veeanum {
	pikkus: number;
	laius: number;
	korgus: number;
	veemaht: number;
	ruumala():number;
	paljuvett(): number; 
}*/

class Akvaarium { //implements Veeanum {
	pikkus: number = 0;
	laius: number = 0;
	korgus: number = 0;
	veemaht: number = 0;
	
	constructor (pikkus: number, laius: number, korgus: number) {
		this.pikkus = pikkus;
		this.laius = laius;
		this.korgus = korgus;
		this.veemaht = 0;
	}
	
	ruumala(){
		this.veemaht = this.pikkus*this.laius*this.korgus
		return console.log("Selle akvaariumi maht on " + this.veemaht + " cm3");
	}
	
}

let minuAkva = new Akvaarium(10, 10, 10);
minuAkva.ruumala();