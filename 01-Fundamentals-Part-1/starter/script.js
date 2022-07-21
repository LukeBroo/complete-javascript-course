// let js = 'mamma mia';

//     console.log(js);


// let testNameMamaMiaLala = "to wielbąd bo chodzi że góra że garb";
// let snake = first_name_mama_mia_lala = 'to snake czyli wąż bo sie wije że góra dół co nie???'
//     console.log(testNameMamaMiaLala);
//     console.log(testNameMamaMiaLala);
//     console.log(snake)
//     console.log('alt + shift mili panstwo');

// let PI = Math.PI;
//     console.log(PI);

// // wow  coment

// console.log(true);

// let me = false;
// console.log(typeof me);
// console.log(typeof 'me');

// let unde;
// console.log(unde)

// const mama = 'mama';

// console.log(mama);

// const currentYear = 2032;

// const ageJonas = currentYear - 1991;
// const ageSana = currentYear - 2018;
// console.log(ageJonas, ageSana);

// console.log(ageJonas * 2, ageSana / 2);

// let a, b;
// a = b = 10 - 5;
// console.log(a, b);

// const averageAge = (ageJonas + ageSana) / 2;
// console.log(ageJonas, ageSana, averageAge);

///////////////////////////////////////////////////

const markWeight1 = 78;
const markTall1 = 1.69;
const johnWeight1 = 92;
const johnTall1 = 1.95;

const markWeight2 = 95;
const markTall2 = 1.88;
const johnWeight2 = 85;
const johnTall2 = 1.76;


const bmiMark1 =  markWeight1 / markTall1 ** 2
const bmiJohn1 =  johnWeight1 / johnTall1 ** 2

console.log(bmiMark1, bmiJohn1);

const compareBMI = bmiMark1 > bmiJohn1;
console.log(compareBMI);



// if (bmiMark1 > bmiJohn1) {
//     console.log(true)
// } else {
//     console.log(false)
// };

const checkExpenses = function() {
    if (bmiMark1 > bmiJohn1) {
    console.log(true)
} else {
    console.log(false)
};

}

const fastF = () => {
    if (bmiMark1 < bmiJohn1) {
    console.log(true)
} else {
    console.log(false)
    };
}

fastF();
checkExpenses();


const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const john = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(john);

const tes = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`
console.log(tes);

console.log(`String ${job}`);

console.log('was is das \n\
was was was\n\
lololo')

console.log(`String
o panie
mammoa`)

const age = 10
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('mamma mia ❤')
} else {
    const leftAge = 18 - age;
    console.log(`not mamma mia 🌹, need ${leftAge} more to live`)
};


const birth = 1991;
let centuary;

if (birthYear <= 2000) {
    centuary = 20;
} else {
    centuary = 21;

}

console.log(centuary);

const inputY = '1998';
console.log(Number(inputY) + 18);
console.log(inputY + 18);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let height; // False bo undefined

if (Boolean(0)) {
    console.log('Do it because true');
}

if (23 != 22) console.log("What's going on?!?")

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('No car for her');
}

// Challenge Dolphins vs. Koalas

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const averageDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

console.log(averageDolphinsScore);

const koalaScore1 = 98;
const koalaScore2 = 108;
const koalaScore3 = 70;
const averageKoalaScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log(averageKoalaScore);

if (averageDolphinsScore > averageKoalaScore && averageDolphinsScore >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (averageDolphinsScore < averageKoalaScore && averageKoalaScore >= 100 ) {
    console.log('Koalas win the trophy 🏆');
} else if (averageDolphinsScore && averageKoalaScore <= 100) {
    console.log('Not enough points');
} else {
    console.log('its a draw')
}

// Switch statement

const day = 'monday';

switch(day) {
    case 'monday': 
        console.log('Its monday day');
    break;
    case 'tuesday': 
        console.log('Its tuesday day');
    break; 
    case 'wednesday': 
        console.log('wednsday');
    break;
    case 'saturday':
    case 'sunday':
        console.log('WEEKEND');
    default:
        console.log('not day at all');
}

// ? operator 

const age2 = 23;

const drink = age2 >= 18 ? 'wine 🍷' : 'water 💧'
console.log(drink);

