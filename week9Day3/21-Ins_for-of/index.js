// 1. Using arrays
const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of songs) {
  console.log(value);
}
// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map

// had to use a different constant other than songs to make work.
const songsMap = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);

for (const [key, value] of songsMap) {
  console.log(`${key}'s chart position is ${value}`);
}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2
