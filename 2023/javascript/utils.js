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
 * @param {Function} f - The function that it timed.
 */
export function time(f) {
  const before = Date.now();
  f();
  const after = Date.now();

  console.log(`Total time: ${(after - before)} ms`)
}

