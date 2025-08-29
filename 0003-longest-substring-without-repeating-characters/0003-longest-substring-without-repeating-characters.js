/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1
    const strLength = s.length;
    let tmpArray = [];
    let arr = []
    let currentIndex = null
    for(let i = 0; i < strLength-1; i++) {
        tmpArray.push(s[i])
        for(let j = i + 1; j < strLength; j++) {
            if(!tmpArray.includes(s[j])) {
                tmpArray.push(s[j])
            } else {
              tmpArray = tmpArray
              break
            }
        }
        arr.push(tmpArray)
        tmpArray = []
    }
    const arrLength = arr.length
    let result = 0
    for(let j = 0; j < arrLength; j++) {
      if(arr[j].length > result) {
        result = arr[j].length
      }
    }
    return result
};