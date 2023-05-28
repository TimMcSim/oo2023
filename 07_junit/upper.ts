interface UpperCase {
	letterList: string[];
	oneByOne: string[];
	toUpper(word: string): string;
}

class Vowel implements UpperCase {
	letterList: string[] = ["a", "e", "i", "o", "u", "w", "y"];
	oneByOne: string[] = [];
	toUpper(word: string): string {
		for (let i = 0; i < word.length; i++) {
			this.oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
		}
		return this.oneByOne.join("");
	}
}
class Consonant implements UpperCase {
	letterList: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
	oneByOne: string[] = [];
	toUpper(word: string): string {
		for (let i = 0; i < word.length; i++) {
			this.oneByOne.push(this.letterList.includes(word[i]) ? word[i].toUpperCase() : word[i].toLowerCase());
		}
		return this.oneByOne.join("");	
	}
}

/*export {
	Vowel,
	Consonant
}*/