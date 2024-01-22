const calories = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

const elf1 = calories.slice(0, 3);
const elf2 = calories.slice(3, -6);
const elf3 = calories.slice(4, -4);
const elf4 = calories.slice(6, -1);
const elf5 = calories.slice(9);

const allCalories = new Array(
    elf1.reduce((a, b) => a + b, 0),
    elf2.reduce((a, b) => a + b, 0),
    elf3.reduce((a, b) => a + b, 0),
    elf4.reduce((a, b) => a + b, 0),
    elf5.reduce((a, b) => a + b, 0)
)

highestCalory = Math.max(...allCalories);
console.log(highestCalory);
