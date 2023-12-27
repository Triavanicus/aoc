import { read, time } from "./utils.js";

time("day1", () => {
  const data = read("./d1.txt");
  const lines = data.split("\n").filter((line) => line != "");
  const numMap = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };

  let numbers = lines.map((line) => {
    let firstNum = null;
    let lastNum = null;

    for (let i = 0; i <= line.length && firstNum === null; i++) {
      const str = line.substring(0, i);
      for (const key of Object.keys(numMap)) {
        if(str.includes(key)) {
          firstNum = numMap[key];
          break;
        }
      }
    }

    for (let i = line.length - 1; i >= 0 && lastNum === null; i--) {
      const str = line.substring(i, line.length);
      for (const key of Object.keys(numMap)) {
        if(str.includes(key)) {
          lastNum = numMap[key];
          break;
        }
      }
    }

    return firstNum * 10 + lastNum;
  });
  
  let result = numbers.reduce((acc, n) => acc + n);
  console.log(numbers);
  console.log("Result:", result);
});
