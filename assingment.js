//functions
//Create an arrow function `multiplyByTwo` that takes a number as input and returns its double

const multiplyByTwo = (number) => {
    return number * 2;
}

console.log(multiplyByTwo(2));


//Write a function `calculateAverage` that takes an array of numbers and returns the average value.

function calculateAverage(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

//const numbers = [5, 8, 9, 4, 3, 8, 6, 1];
//console.log("Average:", calculateAverage(numbers));










//Control Flow:


//Write a conditional statement that checks if a number is positive, negative, or zero, and logs 
//an appropriate message to the console.

let number = 42; 

if (number > 0) {
    console.log(number + " is positive.");
} else if (number < 0) {
    console.log(number + " is negative.");
} else {
    console.log("The number is zero.");
}




//Create a switch statement that takes a day of the week as input and logs a message indicating 
//whether it's a weekday or a weekend

let dayOfWeek = "Saturday"; 

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekends = ["Saturday", "Sunday"];

if (weekdays.includes(dayOfWeek)) {
    console.log(dayOfWeek + " is a weekday.");
} else if (weekends.includes(dayOfWeek)) {
    console.log(dayOfWeek + " is a weekend day.");
} else {
    console.log("Invalid day of the week.");
}





//Loops
//Write a `for` loop that prints all even numbers from 1 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Implement a `while` loop that counts down from 10 to 1 and logs each number to the console. 
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


//Use a `do-while` loop to repeatedly prompt the user for a number until they enter a valid positive number

//do {
    //let number = prompt("Enter a positive number: ");
//} while (isNaN(number) || number <= 0);

//console.log(number + " is a valid positive number.");


//Arrays
//Create an array of fruits and use the `forEach` method to log each fruit to the console.

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

fruits.forEach(fruit => {
    console.log(fruit);
});

//Write a function `findMax` that takes an array of numbers as input and returns the maximum value.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}


