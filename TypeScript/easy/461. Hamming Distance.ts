function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).split("").filter(bit => bit === "1").length;
}
