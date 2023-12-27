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
 * Logs the ms a function takes.
 * @param {string} name - The name of the timer.
 * @param {Function} f - The function that is to be timed.
 */
export function time(name, f) {
  console.time(name);
  f();
  console.timeEnd(name);
}

