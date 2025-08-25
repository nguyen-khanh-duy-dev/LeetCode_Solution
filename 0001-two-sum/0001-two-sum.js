/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    const arrayLength = nums.length

    for(let i = 0; i < arrayLength - 1; i++) {
        for(let j = i + 1; j < arrayLength; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                result.push(i, j)
            }
        }
    }
    return result
};