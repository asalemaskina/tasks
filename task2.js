var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];
if (m == 'января') {
    var x = 334 + (31 - d);
    if ((y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))) {
        x = x + 1;
    }
} else if (m == 'февраля') {
    var x = 306 + (28 - d);
    if ((y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))) {
        x = x + 1;
    }
} else if (m == 'марта') {
    var x = 275 + (31 - d);
} else if (m == 'апреля') {
    var x = 245 + (30 - d);
} else if (m == 'мая') {
    var x = 214 + (31 - d);
} else if (m == 'июня') {
    var x = 184 + (30 - d);
} else if (m == 'июля') {
    var x = 153 + (31 - d);
} else if (m == 'августа') {
    var x = 122 + (31 - d);
} else if (m == 'сентября') {
    var x = 92 + (30 - d);
} else if (m == 'октября') {
    var x = 61 + (31 - d);
} else if (m == 'ноября') {
    var x = 31 + (30 - d);
} else if (m == 'декабря') {
    var x = 31 - d;
}
console.log(x);
