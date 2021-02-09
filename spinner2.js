// Refactor of original spinner codes
let delay = 0;

const cursorStates = ['|', '/', '-', '\\'];

const cursorCycles = cursorStates.concat(cursorStates.concat(cursorStates));

const write = (cursor) => process.stdout.write(`\r${cursor}    `);

for (let cursor of cursorCycles) {
  delay += 100;
  setTimeout(() => {
    write(cursor);
  }, delay);
}