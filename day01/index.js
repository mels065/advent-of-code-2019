const fs = require("fs");
const path = require("path");

fs.readFile(
    path.join(__dirname, "data.txt"),
    (err, data) => {
        if (err) throw err;

        const sum = data.toString()
            .split("\n")
            .reduce((acc, cur) => {
                let totalFuel = 0;
                let requiredFuel = cur;
                while (requiredFuel > 0) {
                    requiredFuel = Math.max(Math.floor(requiredFuel / 3) - 2, 0);
                    totalFuel += requiredFuel; 
                }
                return acc + totalFuel
            }, 0);
        console.log(sum);
    }
);
