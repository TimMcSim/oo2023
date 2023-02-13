//This function takes in a word and outputs the number of letters
let klaviatuur=require("readline-sync")
let word:string=klaviatuur.question("Sisesta oma sõna:");

function charinword(inputWord: string) {
	let inputWordLenght:number = inputWord.length;
	let answer:string = "Sinu sõna pikkus on: "+ inputWordLenght+" tähte"
	return answer
}

console.log(charinword(word));
