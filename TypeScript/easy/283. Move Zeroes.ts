function moveZeroes(nums: number[]): void {
    const filtered = nums.filter((el) => el !== 0);
    const zeroCount = nums.length - filtered.length;

    nums.length = 0;
    nums.push(...filtered);
    for (let i = 0; i < zeroCount; i++) {
        nums.push(0);
    }
}
