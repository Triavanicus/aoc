import { read, run } from "./utils.js";

function day3() {
  let data = read("d3.txt");
  const lineLength = data.indexOf("\n");
  data = data.split("\n").join("");
  const notSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const adjacent = [
    -1 - lineLength,
    -lineLength,
    1 - lineLength,
    -1,
    1,
    lineLength - 1,
    lineLength,
    lineLength + 1
  ];
  return data.split("")
    .reduce((symbols, char, index) => {
      if (notSymbols.indexOf(char) === -1) {
        symbols.push(index);
      }
      return symbols;
    }, []).reduce((acc, i) => {
      acc.push(adjacent.filter((n) => i + n >= 0 && i + n < data.length)
        .map((n) => i + n)
        .filter((n) => notSymbols.indexOf(data[n]) >= 0
          && notSymbols.indexOf(data[n]) < 10));
      return acc;
    }, []).flat().sort((a, b) => a - b).filter((n, i, arr) => {
      console.log(n);
      if (i + 1 >= arr.length || arr[i + 1] !== n + 1 && arr[i + 1] !== n) return true;
      return false;
    }).map((n) => {
      let min = n;
      let max = n;
      for (; notSymbols.indexOf(data[min - 1]) !== -1 && notSymbols.indexOf(data[min - 1]) < 10; min--);
      for (; notSymbols.indexOf(data[max]) !== -1 && notSymbols.indexOf(data[max]) < 10; max++);
      //console.log(+data.slice(min,max));
      return +data.slice(min, max);
    }).reduce((acc, n) => acc + n);
}

run(day3);
