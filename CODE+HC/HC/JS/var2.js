var num = 1;
{   // visivel fora do bloco
    var num = 2;
    console.log('dentro = ',num); // 2
}
console.log('fora = ',num); // 2, var tem escopo de função ou global, não de bloco

