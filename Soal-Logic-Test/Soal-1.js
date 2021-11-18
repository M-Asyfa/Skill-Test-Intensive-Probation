function isPalindrome(Words)
{
    let ReversedWords = "";

    for (i = Words.length - 1; i >= 0; i--)
    {
        ReversedWords = ReversedWords + Words[i];
    }
    
    // return Words;
    // return ReversedWords;

    if (ReversedWords.toLowerCase() == Words.toLowerCase())
    {
        return(true);
    }
    else if (ReversedWords.toLowerCase() != Words.toLowerCase())
    {
        return(false);
    }
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("Malam"));
console.log(isPalindrome("Kasur ini rusak"));
console.log(isPalindrome("Ibu Ratna antar ubi"));
console.log(isPalindrome("Malas"));
console.log(isPalindrome("Makan nasi goreng"));
console.log(isPalindrome("Balonku ada lima"));