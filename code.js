/* Table of Contents4
   1. Copy to Clipboard
   2. Scroll to Top
   3. Check for Dark Mode
   4. Swap Between 2 Elements
   5. Capitalize a String
   6. Reverse a String
   7. Remove Duplicates from Array
   8. Remove Falsy Values from the Array
   9. Merge Multiple Arrays
  10. Check for Array
  11. Clone an Array
  12. Shuffle an Array
  13. Convert RGB to Hex
  14. Generate Random Hex
  15. Generate Random Integer
  16. Find the Average of Numbers
  17. Convert a BNumber to Another Base
  18. Round the Number to a Specified Number of Decimals 
  */

// 1. Copy to Clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(textBox.value)
});

// 2. Scroll to Top
const goToTop = () => window.scrollTo(0,0);
goToTop();

// 3. Check for Dark Mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode);

// 4. Swap Between 2 Elements
let x = 2, y = 4; 
[x,y] = [y,x];

// 5. Capitalize a String
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1); 

// 6. Reverse a String
const reverse = (text) => [...text].reverse().join("");

// 7. Remove Duplicates from Array
const removeDuplicates = (arr) => [...new Set(arr)];

// 8. Remove Falsy Values from the Array
sampleArray.filter(Boolean);

// 9. Merge Multiple Arrays
let arr1 = [1,2], arr2 = [3,4]; 
let combinedArr = [].concat(arr1,arr2); // combinedArr is used below... 

// 10. Check for Array
console.log(combinedArr instanceof Array); 

// 11. Clone an Array
const clonedArr = [...combinedArr]; 

// 12. Shuffle an Array
const shuffleArr = clonedArr.sort(() => 0.5 - Math.random());

// 13. Convert RGB to Hex
const rgbToHex = (r,g,b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// 14. Generate Random Hex
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;

// 15. Generate Random Integer
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// 16. Find the Average of Numbers
const average = (...args) => args.reduce((a,b) => a + b) / args.length;

// 17. Convert a Number to Another Base
parseInt(number, base1).toString(base2); 

// 18. Round the Number to a Specified Number of Decimals 
let z = 2.34869;
z = z.toFixed(2); // NOTE: z will now be a string type
