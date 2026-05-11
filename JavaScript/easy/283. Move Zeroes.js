var moveZeroes = function(nums) {
    let filtered = nums.filter((el) => el !== 0);
    let zeroCount = nums.length - filtered.length;
    
    nums.length = 0;
    nums.push(...filtered);
    for(let i = 0; i < zeroCount; i++) {
        nums.push(0);
    }
};