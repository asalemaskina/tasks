function konh(x) {
    if (((x >= 5) && (x <= 20)) || ((x % 10 >= 5) && (x % 10 <= 9) || (x % 10 == 0))) {
        return ("ов");
    } else if (x % 10 == 1) {
        return ("");
    } else {
        return ("а")
    }
}

function konms(x) {
    if (((x >= 5) && (x <= 20)) || ((x % 10 >= 5) && (x % 10 <= 9) || (x % 10 == 0))) {
        return ("");
    } else if (x % 10 == 1) {
        return ("а");
    } else {
        return ("ы")
    }
}
var t1 = +process.argv[2];
var t2 = +process.argv[3];
var t = t1 + t2;
var str = "";
var h = Math.trunc(t / 3600);
if (h > 0) {
    str = h + " " + "час" + konh(h) + " ";
}
t = t % 3600;
if (t > 0) {
    var m = Math.trunc(t / 60);
    if (m > 0) {
        str = str + m + " " + "минут" + konms(m) + " ";
    }
    t = t % 60;
    if (t > 0) {
        str = str + t + " " + "секунд" + konms(t);
    }
}
console.log(str);
