
let nums = [1, 2, 3, 4, 5]; // array of 5 numbers
let sum = 0; // initialize sum variable to 0

for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i]; // 1 + 2 + 3 + 4 + 5 = 15
}

let average = sum/nums.length; // 15 / 5 = 3

console.log(`array: ${nums}`);
console.log(`sum: ${sum}`); // 15
console.log(`average: ${average}`); // 3