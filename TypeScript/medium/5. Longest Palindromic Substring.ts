function longestPalindrome(s: string): string {
    if (!s || s.length === 0) return "";

    const T = "^#" + s.split("").join("#") + "#$";
    const n = T.length;
    const P = new Array<number>(n).fill(0);
    let center = 0;
    let right = 0;

    for (let i = 1; i < n - 1; i++) {
        const mirror = 2 * center - i;

        if (i < right) {
            P[i] = Math.min(right - i, P[mirror]);
        }

        while (T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }

        if (i + P[i] > right) {
            center = i;
            right = i + P[i];
        }
    }

    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }

    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
}
