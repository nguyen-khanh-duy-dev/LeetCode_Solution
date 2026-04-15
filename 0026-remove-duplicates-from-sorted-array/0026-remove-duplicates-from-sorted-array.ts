function removeDuplicates(nums: number[]): number {
    const length = nums.length;
    if(length === 0) return 0
    let k = 1;

    for(let i = 1; i < length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
};