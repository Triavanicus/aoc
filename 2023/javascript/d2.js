import { read, run } from "./utils.js";

function day2() {
  const data = read("./d2.txt");

  let result = data
    .split("\n")
    .filter((s) => s != "")
    .map((line) => {
      let maxCubes = {};
      const gameInfo = line.split(":");
      const gameNum = gameInfo[0].split(" ")[1].trim();
      const gameTurns = gameInfo[1]
        .split(";")
        .flatMap((s) => s.split(","))
        .map((s) => s.trim());

      gameTurns.forEach((turn) => {
        const info = turn.split(" ");
        maxCubes[info[1]] = Math.max(maxCubes[info[1]] || 0, parseInt(info[0]));
      });

      return [parseInt(gameNum), maxCubes];
    })
    .reduce(
      (acc, game) => acc + Object.values(game[1]).reduce((acc, n) => n * acc),
      0,
    );

  return result;
}

run(day2);
