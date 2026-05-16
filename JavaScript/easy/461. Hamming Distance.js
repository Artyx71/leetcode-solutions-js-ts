var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).split("").filter(bit => bit === "1").length;
};