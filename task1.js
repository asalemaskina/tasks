function IsPoly(str) {
    var n = str.length;
    var i = 0;
    while ((i * 2) <= n) {
        if (str[i] == str[n - i - 1]) {
            i = i + 1
        } else {
            i = n + 1
        }
    }
    if (i == n + 1) {
        console.log('NO')
    } else {
        console.log('YES')
    }
}
var s = process.argv[2];
var n = s.length;
var i = 0;
var snew = "";
while (i <= n) {
    var x = s.charCodeAt(i);
    if ((x >= 97) && (x <= 122)) {
        snew = snew + s[i];
    } else if ((x >= 65) && (x <= 90)) {
        snew = snew + String.fromCharCode(x + 32);
    }
    i = i + 1;
}
IsPoly(snew);
