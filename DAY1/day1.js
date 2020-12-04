var numbers = new Int8Array();

function loadFile() {
    var fs = require("fs");
    var text = fs.readFileSync("input.txt").toString('utf-8');
    numbers = text.split("\n").map(Number);
}

loadFile();
numbers.sort(function (a, b) { return a - b; });

for (i = 0; i < numbers.length; i++) {
    var currNum = numbers[i];
    var solved = false;
    if (currNum == 0) {
        continue;
    }

    for (j = numbers.length - 1; j > i; j--) {
        if (numbers[i] + numbers[j] > 2020) {
            continue;
        }
        else if (numbers[i] + numbers[j] == 2020) {
            solved = true;
            console.log(numbers[i] + numbers[j]);
            console.log(numbers[i] * numbers[j]);
            break;
        }
        else if (numbers[i] + numbers[j] < 2020) {
            break;
        }
    }

    if (solved) {
        console.log("WOO");
        break;
    }
}

for (i = 0; i < numbers.length; i++) {
    var currNum = numbers[i];
    var solved = false;
    if (currNum == 0) {
        continue;
    }

    for (j = i + 1; j < numbers.length; j++) {

        for (k = j + 1; k < numbers.length; k++) {

            if (numbers[i] + numbers[j] + numbers[k] < 2020) {
                continue;
            }
            else if (numbers[i] + numbers[j] + numbers[k] == 2020) {
                solved = true;
                console.log(numbers[i] + numbers[j] + numbers[k]);
                console.log(numbers[i] * numbers[j] * numbers[k]);
                break;
            }
            else if (numbers[i] + numbers[j] + numbers[k] > 2020) {
                break;
            }
        }
        
        if (solved) {
            console.log("WOO");
            break;
        }
    }

    if (solved) {
        console.log("WOO");
        break;
    }
}

