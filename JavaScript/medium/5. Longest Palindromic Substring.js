var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";
    
    let T = "^#" + s.split('').join('#') + "#$";
    let n = T.length;
    let P = new Array(n).fill(0);
    let center = 0;
    let right = 0;
    
    for (let i = 1; i < n - 1; i++) {
        let mirror = 2 * center - i;
        
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
    
    let start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
};