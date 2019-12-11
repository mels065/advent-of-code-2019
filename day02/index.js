const fs = require("fs");
const path = require("path");

const MAGIC_NUMBER = 19690720;

fs.readFile(path.join(__dirname, "input.txt"), (err, data) => {
    let codes;
    let error = false;
    for (let noun = 0; noun <= 99; noun++) {
        let found = false;
        for (let verb = 0; verb <= 99; verb++) {
            codes = data.toString().split(/[\n,]/).map(Number);
            codes[1] = noun;
            codes[2] = verb;

            let pos = 0;
            let exitProgram = false;
            error = false;
            while (!exitProgram) {
                switch (codes[pos]) {
                    case 1: {
                        codes[codes[pos+3]] = codes[codes[pos+1]] + codes[codes[pos+2]];
                        break;
                    }
                    case 2: {
                        codes[codes[pos+3]] = codes[codes[pos+1]] * codes[codes[pos+2]];
                        break;
                    }
                    case 99: {
                        exitProgram = true;
                        break;
                    }
                    default: {
                        exitProgram = true;
                        error = true;
                    }
                }
                pos += 4;
            }
            if (codes[0] === MAGIC_NUMBER) {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (error) console.log("Something went wrong...");
    else console.log(100 * codes[1] + codes[2]);
});
