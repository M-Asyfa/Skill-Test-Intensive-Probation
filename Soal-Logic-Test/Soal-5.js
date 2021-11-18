function FizzBuzz(n)
{
    let result = [];
    let str = "", a;

    for (a = 1; a <= n; a++)
    {
        // x = a % 3 == 0;
        // y = a % 5 == 0;
        if (a % 15 == 0)
        {
            str = "FizzBuzz"
        }
        else if (a % 3 == 0)
        {
            str = "Fizz"
        }
        else if (a % 5 == 0)
        {
            str = "Buzz"
        }
        else if (a % 3 != 0 && a % 5 != 0)
        {
            str = a;
        }
        
        result.push(str); 
    }

    return result;
}

console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));