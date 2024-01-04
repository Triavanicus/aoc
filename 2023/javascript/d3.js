import { read, run } from "./utils.js";

const notSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let data = read("d3.txt");
const lineLength = data.indexOf("\n");
data = data.split("\n").join("");

function isSymbol(val) {
  return notSymbols.indexOf(val) === -1;
}

function isNumber(val) {
  let index = notSymbols.indexOf(val);
  return index > -1 && index < 10;
}

function getNumber(index) {
  if (!isNumber(data[index])) {
    return null;
  }

  let start = index;
  let end = index;

  while (isNumber(data[start--]));
  while (isNumber(data[end++]));
  start += 2;
  end -= 1;

  const result = { start: start, end: end, number: data.slice(start, end) };
  return result;
}

function getNumbers(symbol) {
  const adjacent = [
    -1 - lineLength,
    -lineLength,
    1 - lineLength,
    -1,
    1,
    lineLength - 1,
    lineLength,
    lineLength + 1,
  ];

  let numbers = adjacent
    .map((offset) => {
      return getNumber(symbol.index + offset);
    })
    .filter((number) => number !== null)
    .reduce((numbers, number) => {
      numbers["i" + number.start] = number.number;
      return numbers;
    }, {});

  return {
    numbers: Object.values(numbers),
    ...symbol,
  };
}

function day3() {
  return data
    .split("")
    .reduce((symbols, char, index) => {
      if (isSymbol(char)) {
        symbols.push({ char: char, index: index });
      }
      return symbols;
    }, [])
    .filter((symbol) => symbol.char === "*")
    .map(getNumbers)
    .filter((val) => val.numbers.length === 2)
    .map((val) => val.numbers[0] * val.numbers[1])
    .reduce((acc, num) => acc + num);
}

run(day3);
