//This function takes in a word and outputs the number of letters
let klaviatuur=require("readline-sync")
let word:string=klaviatuur.question("Sisesta oma sõna:");

function charinword(inputWord: string) {
	let inputWordLenght:string = inputWord.length;
	let answer:string = "Sinu sõna pikus on: "+ inputWordLenght+" tähte"
	return answer
}

console.log(charinword(word));
