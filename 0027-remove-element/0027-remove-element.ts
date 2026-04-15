function removeElement(nums: number[], val: number): number {
    const length = nums.length

    if(length === 0) return 0;

    let k = 0;
    for(let i = 0; i < length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};