'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('lol');

// const interface = 'Audio';

function logger() {
    console.log('My name is chikichiki slim shady');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice1 = `Juice with ${apples} apples and ${oranges} oranges.`
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return [juice, juice1];
}

function cutFruitPieces(fruit) {
    return fruit * 4;
}

const appleJuice = fruitProcessor(3, 8);

console.log(appleJuice[0]);
console.log(fruitProcessor(5, 6))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1)

//Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1990);
console.log(age3)

const calcAge = function(year) {
    return 2037 - year;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} restires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
 

////////////////////////////////////////////

const test1 = function(liczba1, liczba2) {

    const nowePrzypisanieFunkcji = nowaFunkcja(liczba1);
    const nowePrzypisanieFunkcji2 = nowaFunkcja2(liczba1, liczba2);



    const liczbaPokaz = `Liczba sie pokazuje ${liczba1} i ${liczba2} i ${nowePrzypisanieFunkcji}||||| ${nowePrzypisanieFunkcji2}`;
    const liczbaPokaz2 = `${nowePrzypisanieFunkcji2}`;
    return [liczbaPokaz, liczbaPokaz2];
}

function nowaFunkcja(liczba3) {
    return '/////' + liczba3 + '-dodana z funkcji';
    // const dodawanieLiczb = '/////' + liczba3 + '-dodana z funkcji';
    // return dodawanieLiczb;
}

function nowaFunkcja2(liczba1, liczba2) {
    return liczba1 + liczba2;
}

const przypisanie = test1(3, 4);

console.log(test1(1,2))
console.log(przypisanie);
test1(5, 6); // nie pokazuje sie bo nie ma clg
console.log(przypisanie[1], przypisanie[0]);


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice1 = `Juice with ${apples} apples and ${oranges} oranges.`
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return [juice, juice1];
// }

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// const appleJuice = fruitProcessor(3, 8);

// console.log(appleJuice[0]);
// console.log(fruitProcessor(5, 6))

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////////////////////////////////////////////////////////////////


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; 

const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(265, 54, 49);

function checkWinner() {
    if(dolphinsScore >= 2 * koalasScore) {
        return `Delfiny wygrały wynikiem ${dolphinsScore} do ${koalasScore}`;
    } else if(koalasScore >= 2 * dolphinsScore){ 
        return `Koale wygrały wynikiem ${koalasScore} do ${dolphinsScore}`;
    } else {
        return `Nikt nie wygrał bo nie x2 wynik co nie?`;
    }
}

console.log(dolphinsScore, 'Dolphins Score'); 
console.log(koalasScore, 'Koalas Score');
console.log(checkWinner());

const checkWinner2 = function (avgDolphins, avgKoalas) {
    if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koale wygrały wynikiem ${avgDolphins} do ${avgKoalas}`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Delfiny wygrały wynikiem ${avgKoalas} do ${avgDolphins}`);
    } else {
        console.log('NIKT NIE WYGRAŁ BO NIE BYŁO X2');
    }
}


checkWinner2(dolphinsScore, koalasScore);

////////////////////////////////////////////////////
// Tablice
const varName = 'var name';
const friends = ['Michael', 'Steven', 'Peter', varName];
console.log(friends);
console.log(friends[0]); 

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[years.length - 1]);

friends[2] = 'Zmiana';
console.log(friends);

const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
}

const aga1 = calcAge4(years[0]);
const aga2 = calcAge4(years[1]);

console.log(aga1, aga2);


const lata = [1998, 1984, 1991, 2902, 2131];

const lato1 = calcAge4(lata[0]);
const lato2 = calcAge4(lata[1]);

console.log(lato1, lato2);

friends.push('NIKT');
console.log(friends);


if(friends.includes('Steven')) {
    console.log('Steven jest w tablicy');
}

if(friends.length > 2) {
    console.log('Tablica większa niż 2');
}

 const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }

 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 console.log(bills, tips, totals);

 const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven',
        ['test1', 'test2', 'test3'],
    2033
    ],
    2101
 ];
 console.log(jonasArray);
 console.log(jonasArray[4][3][2]);

 const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
 }

 console.log(jonas['age']);

//  const interestedIn = prompt('What would you like to ask?');
//  console.log(jonas[interestedIn]);

let cinemaMovies = [
    'Joker',
    '1917',
    'Jumanji: The Next Level',
    'Little Women',
    'Rambo',
    'Commando',
    'Alien'
];

function loop(movieLibrary) {
    for (let i = 0; i < movieLibrary.length; i++) {
        console.log(movieLibrary[i]);
    }
}

for (let i = 0; i < cinemaMovies.length; i++) {
    console.log(cinemaMovies[i]);
}

loop(cinemaMovies);
