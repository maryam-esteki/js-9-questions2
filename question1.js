/**
 *
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 * - return the new array
 * @format
 *
 *
 */
const stringsArray = [
  "  hello world  ",
  "  /path/to/file  ",
  "example/",
  "  spaced string ",
  "/starts/with/slash",
  "noSlash",
  "   /another/path  "
];

function tidyUpString(str) {
  return stringsArray.map((str)=>str.replace(/\//g, "").toLowerCase().trim())
}
const newArray = tidyUpString(stringsArray)
console.log(newArray)
/* ======= TESTS - DO NOT MODIFY ===== */

// function test(test_name, actual, expected) {
//   let status;

//   let isEqual;
//   if (Array.isArray(expected)) {
//     isEqual = arraysEqual(actual, expected);
//   } else {
//     isEqual = actual === expected;
//   }

//   if (isEqual) {
//     status = "PASSED";
//   } else {
//     status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
//   }

//   console.log(`${test_name}: ${status}`);
// }

// function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length != b.length) return false;

//   for (let i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }

//   return true;
// }

// test(
//   "tidyUpString function works - case 1",
//   tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
//   ["daniel", "irina", "gordon", "ashleigh"]
// );
// test(
//   "tidyUpString function works - case 2",
//   tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
//   ["sanyia", "michael", "anthony", "tim"]
// );
