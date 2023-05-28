"use strict";
exports.__esModule = true;
var upper_1 = require("../upper");
test('vowel transform', function () {
    expect(new upper_1.Vowel().toUpper("ara")).toBe("ArA");
});
test('consonant transform', function () {
    expect(new upper_1.Consonant().toUpper("ara")).toBe("aRa");
});
