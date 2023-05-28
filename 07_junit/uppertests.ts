import {Vowel, Consonant} from "../upper";

test('vowel transform', () => {
	expect(new Vowel().toUpper("ara")).toBe("ArA");
});

test('consonant transform', () => {
	expect(new Consonant().toUpper("ara")).toBe("aRa");
});