var mySqrt = function(n) {
    if (n < 0) return NaN;
    if (n === 0) return 0;

    let x = n;
    let prev;
    do {
        prev = x;
        x = (x + n / x) / 2;
    } while (Math.abs(x - prev) > 0.0000001);

    let floorResult = Math.trunc(x);

    if ((floorResult + 1) * (floorResult + 1) === n) {
        return floorResult + 1;
    }

    return floorResult;
};