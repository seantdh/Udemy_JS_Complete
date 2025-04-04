'use strict';

// Liên quan đến Function
// Function ko có đối số truyền vào
// function greetingNewGuest() {
//     const guestName = prompt('Bạn tên là gì thế');
//     console.log(`Xin chào bạn ${guestName} GMO `);
// }

// greetingNewGuest();

// Function trong trường hợp có truyền đối số vào
// function fruitsSmoothie(x, y) {
//     const smothie = `Tôi cần ${x} quả bơ và ${y} quả chuối để hoàn thành cốc sinh tố này`;
//     return smothie;
// }

// console.log(fruitsSmoothie(3, 12));
// console.log(fruitsSmoothie(15, 89));

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// function describeCountry(country, population, capitalCity) {
//     const describe = console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
//     return describe;
// }

// describeCountry('Finland', 6, 'Helsinki');
// describeCountry('Japan', 120, 'Tokyo');
// describeCountry('VietNan', 100, 'Hà Nội');

// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

// Arrow Function
const percentageOfWorld3 = population => (population / 7900) * 100;


// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
const japanPer = percentageOfWorld1(120);
const vietnamPer = percentageOfWorld1(100);
const indonesiaPer = percentageOfWorld1(200);

console.log(japanPer, vietnamPer, indonesiaPer);

//Functions Calling Other Function
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

function describePopulation(country, population) {
    const calPercentage = percentageOfWorld1(population).toFixed(1);
    const desCountry = `${country} has ${population} million pepple, which is about ${calPercentage}% of the World`;
    return desCountry;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Indo', 1500));
console.log(describePopulation('Vietnam', 100));


// Array

const friends = ['Long', 'Linh', 'Hải', 'Minh', 'Thành'];

console.log(friends);
console.log(typeof friends);

console.log(friends.length);

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2] = 'Đạt';
console.log(friends);

const test = new Array(12, 'Minh', 'Dương bếu');
console.log(test);

// Object Method

// Thêm phần tử vào cuối Array

friends.push('An');
console.log(friends);

// Thêm phần từ vào đầu Array

friends.unshift('Nhân');
console.log(friends);

// Xóa phần tử đầu Array
friends.shift();
console.log(friends);

// Xóa phần tử cuối Array
friends.pop();
console.log(friends);

// Introduce about Objects 
// Test for Code pushing github
