// let js = 'Amazing';

// if (js === 'Amazing') {
//     alert('javaScript For Fun!');
// }

// console.log(67 * 32 * 115);

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// let country, continent, population;

// country = 'Japan';
// continent = 'Asia';
// population = 120000000;

// Log their values to the console.

// console.log(country);
// console.log(continent);
// console.log(population);

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// let isIsland, language;

// isIsland = true;
// language = 'Japanese';

// Log the types of isIsland, population, country and language to the console.

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).



// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// const country = 'Japan';
// const language = 'Japanese';
// const continent = 'Asia';
// let population = 120000000;

// Try to change one of the changed variables now, and observe what happens.

// language = 'Vietnamese';

// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// let halfMyCountry = population / 2;

// Increase the population of your country by 1 and log the result to the console.

// console.log(halfMyCountry++);

// Finland has a population of 6 million. Does your country have more people than Finland?

// console.log(population > 6000000);

// The average population of a country is 33 million people. Does you country have less people than the average country?

// console.log(population < 33000000);

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

// const newDescription = country + ' is in ' + continent + ', and its ' + (population / 1000000) + ' million people speak ' + language;

// const otherDes = `${country} is in ${continent}, and its ${population / 1000000} million people speak ${language}`;

// console.log(newDescription);
// console.log(otherDes);


// 1 người muốn check việc lấy car license drive, nếu anh ta đủ tuổi thì cho phép lấy, còn nếu không đủ thì ghi rõ còn bao nhiêu năm nữa thì đủ tuổi lấy bằng

// const birthYear = 2008;
// const now = 2025;
// let yourAge = now - birthYear;

// if (yourAge >= 18) {
//     console.log("Bạn đủ tuổi để thi lấy bằng lái xe 😁");
// } else {
//     console.log(`Bạn còn ${18 - yourAge} năm nữa mới đủ tuổi thi lấy bằng lái xe cơ 😑 `);
// }


// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}



