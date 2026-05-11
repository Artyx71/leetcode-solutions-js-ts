function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const result = nums.filter((el, index) => {
            return target - nums[i] === el && index !== i;
        });

        if (result.length > 0) {
            const firstIndex = i;
            const secondIndex = nums.indexOf(result[0], i + 1);

            if (secondIndex !== -1) {
                return [firstIndex, secondIndex];
            }
        }
    }
    return [];
}
