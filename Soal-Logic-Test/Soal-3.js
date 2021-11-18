function ReverseWords(words)
{
    // let kata = "Javascript";
    // let kataReversed = "";

    // for (let i = kata.length - 1; i >= 0; i--)
    // {
    //     kataReversed = kataReversed + kata[i];
    // }

    // console.log(kataReversed);
    // return kataReversed;

    let wordsCopy = '';
    let temp = '';

    for (let i = 0; i < words.length; i++)
    {
        if (words[i] != ' ')
        {
            temp += words[i];
        }

        if (words[i] == ' ' || i == words.length - 1)
        {
            let reverse = '';

            for (let j = temp.length - 1; j >= 0; j--)
            {
                reverse += temp[j];
            }

            wordsCopy += reverse + ' ';
            temp = '';
        }
    }
    
    return wordsCopy;
}

console.log(ReverseWords("Javascript"));
console.log(ReverseWords("I am A Great human"));