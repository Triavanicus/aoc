import { read, run } from "./utils.js";

function day3() {
  let data = read("d3.txt");
  const lineLength = data.indexOf("\n");
  data = data.split("\n").join("");
  const notSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
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

  return data
    .split("")
    .reduce((symbols, char, index) => {
      if (notSymbols.indexOf(char) === -1) {
        symbols.push({ char: char, index: index });
      }
      return symbols;
    }, [])
    .filter((symbol) => symbol.char === "*")
    .map((symbol) => {
      // TODO: get all of the numbers adjacent to this star
      const getNumber = (index) => {
        let a = notSymbols.indexOf(data[index]);
        if (a < 0 || a >= 10) {
          return null;
        }
        let start = index;
        let end = index;

        const isNum = (index) => {
          const val = notSymbols.indexOf(data[index]);
          return val > -1 && val < 10;
        };

        while (isNum(start--));
        while (isNum(end++));
        start += 2;
        end -= 1;
        return { start: start, end: end, number: data.slice(start, end) };
      };

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
    })
    .filter((val) => val.numbers.length === 2)
    .map((val) => val.numbers[0] * val.numbers[1])
    .reduce((acc, num) => acc + num);
}

run(day3);
