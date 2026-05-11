var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let result = nums.filter((el, index, arr) => {
            return target - nums[i] === el && index !== i;
        });
        
        if(result.length > 0) {
            let firstIndex = i;
            let secondIndex = nums.indexOf(result[0], i + 1); // ищем начиная с i+1
            
            if(secondIndex !== -1) {
                return [firstIndex, secondIndex];
            }
        }
    }
    return [];
};