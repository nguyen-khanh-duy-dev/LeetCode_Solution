/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x <= 9 && x >= 0){
      return true
    } else if(x <= 0) {
      return false
    }
    
    const xReverse = x.toString().trim().split('').reverse().join('')

    return xReverse === x.toString()
};