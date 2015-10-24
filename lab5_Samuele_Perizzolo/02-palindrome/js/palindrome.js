/* Palindrome main file */

Palindrome = {
    
    isWordPalindrome : function(word) {
        return word == word.split('').reverse().join('');
    },
    
    isPhrasePalindrome : function(phrase){
        phrase = phrase.split(" ").join('');
        return phrase == phrase.split('').reverse().join('');
    }
    
    
     
};