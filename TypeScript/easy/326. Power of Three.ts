function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    const logResult = Math.log(n) / Math.log(3);
    return Math.abs(logResult - Math.round(logResult)) < 1e-10;
}
