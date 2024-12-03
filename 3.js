const fs = require("fs");

const str = fs.readFileSync("./3input.txt").toString();;

// Part 1
const re = /(mul\()([0-9]*)(,)([0-9]*)(\))/g;
const regResult = str.match(re);

const total = regResult.reduce(
    (acc, curr) => {
        const mul = curr.split(',')
        return acc + (parseInt(mul[0].match(/\d|\.|\-/g).join('')) * parseInt(mul[1].match(/\d|\.|\-/g).join('')));
    },
    0,
  );

console.log('Part 1 Total: ', total);

  // Part 2

const re2 = /(mul\()([0-9]*)(,)([0-9]*)(\))|(don\'t\(\))|(do\(\))/g;
const reg2Result = str.match(re2);

let enabled = true;
const total2 = reg2Result.reduce(
    (acc, curr) => {
        if (curr === "don't()"){
            enabled = false;
        } else if (curr === "do()"){
            enabled = true;
        } else if (enabled){
            const mul = curr.split(',')
            return acc + (parseInt(mul[0].match(/\d|\.|\-/g).join('')) * parseInt(mul[1].match(/\d|\.|\-/g).join('')))
        }
        return acc;
    },
    0,
  );

  console.log('Part 2 Total: ', total2);