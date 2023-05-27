interface Converter {
	convert(howMany: number, coeff: number): number; 
    takeFrom(): string;
    takeTo(): string;
}

class AmdToEur implements Converter {
	convert(howMany: number, coeff: number): number {
    	return howMany*coeff;
    }
    takeFrom(): string {
    	return "AMD";
    }
    takeTo(): string {
    	return "EUR";
    }
}

class EurToAmd implements Converter {
	convert(howMany: number, coeff: number): number {
    	return howMany*coeff;
    }
    takeFrom(): string {
    	return "EUR";
    }
    takeTo(): string {
    	return "AMD";
    }
}