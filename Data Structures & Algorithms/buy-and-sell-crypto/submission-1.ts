class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxReturn = 0;
        let minBuy = prices[0];
        
        for (const sellPrice of prices) {
            maxReturn = Math.max(maxReturn, sellPrice - minBuy);
            minBuy = Math.min(minBuy, sellPrice);
        }

        return maxReturn;
    }
}
