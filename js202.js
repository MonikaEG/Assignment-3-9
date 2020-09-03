var cpr = Number(prompt('Indtast et CPR-nummer'));
function erlige(cpr)
{
    return (cpr %2 == 0);
}
console.log(erlige(cpr));