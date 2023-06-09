class Polygon {
	s: number = 0;
    constructor(s: number) {
    	this.s = s;
    }
    sides(): number{
    	return this.s;
    }
}

class Square extends Polygon {
    sLen: number = 0;
    constructor(sLen: number) {
    	super(4);
        this.sLen = sLen;
    }
    area(): number{
    	return this.sLen*this.sLen;
    }
}

class Cube extends Square {
    constructor() {
    	super (12);
    }
    volume(): number{
    	return this.sLen*this.sLen*this.sLen
    }
    sides(): number {
    	return super.sides()*3;
    }
}

let p1: Polygon = new Polygon(4);
console.log(p1.sides());

let s1: Square = new Square(8);
console.log(s1.sides());
console.log(s1.area());

let c1: Cube = new Cube();
console.log(c1.sides());
console.log(c1.area());
console.log(c1.volume());
