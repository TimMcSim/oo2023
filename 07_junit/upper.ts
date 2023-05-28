interface UpperCase {
	letterList: string[];
	toUpper(word: string): string;
}

class Vowel implements UpperCase {
	letterList: string[] = ["a", "e", "i", "o", "u", "w", "y"];
	toUpper(word: string): string {
		let oneByOne: string[] = [];
		for (let i = 0; i < word.length; i++) {
			oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
		}
		return oneByOne.join("");
	}
}
class Consonant implements UpperCase {
	letterList: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
	oneByOne: string[] = [];
	toUpper(word: string): string {
		let oneByOne: string[] = [];
		for (let i = 0; i < word.length; i++) {
			oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
		}
		return oneByOne.join("");	
	}
}

/*export {
	Vowel,
	Consonant
}*/