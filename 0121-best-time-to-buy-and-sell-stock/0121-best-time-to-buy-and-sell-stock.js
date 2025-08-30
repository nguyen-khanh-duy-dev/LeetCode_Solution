/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0
    let buy = prices[0]
    let profit = 0
    let lengthArr = prices.length
    for(let i = 1; i < lengthArr; i++) {
        if(prices[i] < buy) {
            buy = prices[i]
        } else if(prices[i] - buy > profit){
            profit = prices[i] - buy

        }
    }
    
    return profit
};