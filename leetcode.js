// const prices = [7,1,5,3,6,4];
// const prices = [7,6,4,3,1]
// const prices = [2,4,1]
const prices = [2,1,2,1,0,2,1]

var maxProfit = function(prices) {
    console.log(prices);
    let low = prices[0];
    let high = prices[0];

    const baseProfit = {
        high: null,
        low: null,
        profit: 0
    }

    for (let i = 0; i < prices.length; i++) {
        console.log(low, high)
        // if new low value, check if previous low/high had a profit and store in baseProfit;
        // then set new low value
        if (prices[i] < low) {
            console.log(`${prices[i]} lower than ${low} `);
            // store current low/high IF it has a higher profit than current baseProfit.profit
            if ((high - low) > baseProfit.profit) {
                baseProfit.profit = high - low;
                baseProfit.high = high;
                baseProfit.low = low;
            }
            // set new low and then clear high;
            low = prices[i];
            high = null;
        }

        if (prices[i] > high) {
            console.log(`${prices[i]} is higher than ${high}`)
            high = prices[i];
            console.log(`high: ${high}`)
        };
    }
    // if no profit can be made
    if (!baseProfit.profit && !high) return 0;

    let profit;
    // check if current high - low is greater than baseProfit.profit and return whichever is greater.
    ((high - low) > baseProfit.profit) ? profit = high - low : profit = baseProfit.profit;
    
    return profit;
};

maxProfit(prices)