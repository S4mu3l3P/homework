describe("palindrome_library", function() {

    it("Verify if a word is palindrome", function() {

        expect(Palindrome.isWordPalindrome("x")).toBe(true);
        expect(Palindrome.isWordPalindrome("933339")).toBe(true);
        expect(Palindrome.isWordPalindrome("baab")).toBe(true);
        
    });

    it("Verify if a word is not palindrome", function() {

        expect(Palindrome.isWordPalindrome("bb'")).toBe(false);
        expect(Palindrome.isWordPalindrome("1121")).toBe(false);
    });

    it("identifies properly palindrome phrases", function() {

	expect(Palindrome.isPhrasePalindrome("0000 bbb 0000")).toBe(true);
        expect(Palindrome.isPhrasePalindrome("ai, ia")).toBe(true);        
    });

    it("identifies properly non palindrome phrases", function() {

        expect(Palindrome.isPhrasePalindrome("aai")).toBe(false);
        expect(Palindrome.isWordPalindrome("aia iai")).toBe(false);
    });
});
