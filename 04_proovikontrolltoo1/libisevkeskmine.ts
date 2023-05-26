/* ESIMENE ETAPP
let arv1: number = 2;
let arv2: number = 4;
let arv3: number = 6;
let tulemus: number = (arv1 + arv2 + arv3)/3;
console.log(tulemus);*/

/* TEINE ETAPP
class LibKes {
	private arvud: number[];
	
	public constructor(arvud: number[]) {
		this.arvud = arvud;
	}
	
	public kalk(): number[] {
		const väljund: number[] = [];
		const arrayLen: number = this.arvud.length;
		for (let i = 0; i <= arrayLen-3; i++) {
			väljund.push((this.arvud[i] + this.arvud[i+1]+ this.arvud[i+2])/3);
		}
		return väljund;
	}
}

const test = new LibKes([2, 4, 6, 8, 10]);
console.log(test.kalk());
*/

// KOLMAS ETAPP
class LibKes {
	private arvud: number[];
	private hoidla: number[];
	private tulemus: number[];
	
	public constructor(arvud: number[]) {
		this.arvud = arvud;
		this.hoidla = [];
		this.tulemus = [];
	}
	
	public addElement(toAdd: number): void {
		this.arvud.push(toAdd);	
	}
	
	public requester(): number[] {
		if (this.tulemus.length < 1) {
			this.kalkLong();
			return this.tulemus;
		} else if (this.arvud.length > this.hoidla.length) {
			this.kalkShort();
			return this.tulemus;
		} else {
			return this.tulemus;
		}	
	}
	
	public checker(): number[] {
		return this.hoidla;
	}
	
	public kalkLong(): void {
		const arrayLen: number = this.arvud.length;
		for (let k = 0; k < arrayLen; k++) {
			this.hoidla.push(this.arvud[k]);
		}
		for (let i = 0; i <= arrayLen-3; i++) {
			this.tulemus.push((this.arvud[i] + this.arvud[i+1]+ this.arvud[i+2])/3);
		}
	}
	
	public kalkShort(): void {
		const arrayLen: number = this.arvud.length;
		this.tulemus.push((this.arvud[arrayLen-1] + this.arvud[arrayLen-2]+ this.arvud[arrayLen-3])/3);
		this.hoidla.push((this.arvud[arrayLen-1] + this.arvud[arrayLen-2]+ this.arvud[arrayLen-3])/3);
	} 
}

const test = new LibKes([2, 4, 6, 8, 10]);
console.log(test.requester());
test.addElement(12);
console.log(test.requester());
test.addElement(14);
console.log(test.requester());
console.log(test.requester());
console.log(test.requester());
test.addElement(16);
console.log(test.requester());
test.addElement(18);
console.log(test.requester());
test.addElement(20);
console.log(test.requester());
test.addElement(22);
console.log(test.requester());



