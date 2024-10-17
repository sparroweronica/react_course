let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

//if...else
let a = Math.floor(Math.random() * 100);
let res;

if (a > 10) {
    if (a > 5) {
        res = (2 * a) + 1;
    } else {
        if (a < 3) {
            res = 1;
        } else {
            if (2 * (a - 2) > 4) {
                res = 5;
            } else {
                if (a % 2 == 0) {
                    res = 6;
                } else {
                    res = 7;
                }
            }
        }
    }
} else {
    if (a * 2 > 5) {
        res = (2 * a) + 1;
    } else {
        if (a < 3) {
            res = 1;
        } else {
            if (2 * (a - 2) > 4) {
                res = 5;
            } else {
                if (a % 2 == 0) {
                    res = 6;
                } else {
                    res = 7;
                }
            }
        }
    }
}

console.log(res);



// switch
let a = Math.floor(Math.random() * 100);
let res;

switch (true) {
    case (a > 10 && (a > 5)):
        res = (2 * a) + 1;
        break;
    case (a > 10 && !(a > 5)):
        if (a < 3) {
            res = 1;
        } else {
            if (2 * (a - 2) > 4) {
                res = 5;
            } else {
                if (a % 2 === 0) {
                    res = 6;
                } else {
                    res = 7;
                }
            }
        }
        break;
    case (a <= 10 && (a * 2 > 5)):
        res = (2 * a) + 1;
        break;
    case (a <= 10 && (a < 3)):
        res = 1;
        break;
    case (a <= 10 && (2 * (a - 2) > 4)):
        res = 5;
        break;
    default:
        if (a % 2 === 0) {
            res = 6;
        } else {
            res = 7;
        }
        break;
}

console.log(res);