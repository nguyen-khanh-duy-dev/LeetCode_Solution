/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 function compareNumbers(a, b) {
  return b-a;
}
var findKthLargest = function(nums, k) {
    let numsSort = nums.sort(compareNumbers)
    console.log(numsSort)
    let result = null
    numsSort.map((num, index) => {
      if((index) === k-1) {
        result = num
      }
    })

    return result
};