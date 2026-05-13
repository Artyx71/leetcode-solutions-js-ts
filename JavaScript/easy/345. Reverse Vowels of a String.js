var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');
    const indices = [...s].map((char, i) => vowels.has(char) ? i : null).filter(i => i !== null);
    const reversed = indices.map((idx, i) => arr[indices[indices.length - 1 - i]]);
    indices.forEach((idx, i) => arr[idx] = reversed[i]);
    return arr.join('');
};