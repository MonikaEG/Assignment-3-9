var a = Number(prompt('Enter a year'));
function leapYear(a)
{
    return ((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0);
}
console.log(leapYear(a));