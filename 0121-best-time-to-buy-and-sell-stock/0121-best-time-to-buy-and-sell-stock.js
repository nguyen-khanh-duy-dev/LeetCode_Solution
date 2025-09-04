/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     if(prices.length <= 1) return 0
//     let buy = prices[0]
//     let profit = 0
//     let lengthArr = prices.length
//     for(let i = 1; i < lengthArr; i++) {
//         if(prices[i] < buy) {
//             buy = prices[i]
//         } else if(prices[i] - buy > profit){
//             profit = prices[i] - buy

//         }
//     }
    
//     return profit
// };

var maxProfit = function(prices) {
    let profit = 0
    let left = 0
    let right = 1
    let lengthPrices = prices.length
    let maxP = 0
    while(right < lengthPrices){
        if(prices[left] < prices[right]) {
            profit = prices[right] - prices[left]
            maxP = Math.max(maxP, profit)
        } else {
            left = right
        }
        right++
    }
    return maxP
}