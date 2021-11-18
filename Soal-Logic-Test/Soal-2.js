function LeapYears(begin,end)
{
    let years = [];
    let num = 4;

    for (let i = begin + num; i <= end; i++)
    {
        if (i % num == 0)
        {
            years.push(i);
        }
    }

    return years;
}

console.log(LeapYears(1900,2020));