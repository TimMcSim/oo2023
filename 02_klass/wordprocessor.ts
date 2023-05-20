interface WordProcessor{
	translate(x:string):string;		
	inputLang():string;
	outputLang():string;
}

class EtToEng implements WordProcessor{
	
	translate(word: string): string{
		let etDict: string[] = ["kass", "koer", "lind"];
		let enDict: string[] = ["cat", "dog", "bird"]; 
		if (etDict.includes(word) == true) {
			return enDict[etDict.indexOf(word)];
		} else {
			return "Ei ole sõnastikus";
		}
	}	
	inputLang():string {
		return "ET";
	};
	outputLang():string {
		return "ENG";
	};
}

class EngToEt implements WordProcessor{
	
	translate(word: string): string {
		let etDict: string[] = ["kass", "koer", "lind"];
		let enDict: string[] = ["cat", "dog", "bird"]; 
		if (enDict.includes(word) == true) {
			return etDict[enDict.indexOf(word)];
		} else {
			return "Ei ole sõnastikus";
		}
	}
	
	inputLang():string {
		return "ENG";
	};
	outputLang():string {
		return "ET";
	};
}

//translate(word: string, etDict: string[], enDict: string[]):string{