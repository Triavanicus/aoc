import * as fs from "fs";

/**
 * Reads a file into a string.
 * @param {string} path - The path of the file to read.
 * @returns {string}
 */
export function read(path) {
  let data = "";
  try {
    data = fs.readFileSync(path, "utf-8");
  } catch (err) {
    console.error(err);
  }
  return data;
}

/**
 * Runs the function, while also displaying the time it took, and the result.
 * @param {Function} f - The function that is to be ran.
 */
export function run(f) {
  const name = f.name;
  const timerName = `${name} time`;

  console.time(timerName);
  let result = f();
  console.timeEnd(timerName);

  console.log(`${name} result: ${result}`);
}

