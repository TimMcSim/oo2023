interface WordProcessor{
	translate(x:string):string;		
	inputLang():string;
	outputLang():string;
}

class Dictionary{
	etDict: string[] = ["kass", "koer", "lind"];
	enDict: string[] = ["cat", "dog", "bird"];
}

class EtToEng implements WordProcessor{
	dict: Dictionary = new Dictionary();
	translate(word: string): string{
		let search: boolean = this.dict.etDict.includes(word);
		if (search == true) {
			return this.dict.enDict[this.dict.etDict.indexOf(word)];
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
	dict: Dictionary = new Dictionary();
	translate(word: string): string {
		let search: boolean = this.dict.enDict.includes(word);
		if (search == true) {
			return this.dict.etDict[this.dict.enDict.indexOf(word)];
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