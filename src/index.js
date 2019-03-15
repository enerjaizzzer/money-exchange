module.exports = function makeExchange(currency) {
    var number = currency;
    var coins = [50, 25, 10, 5, 1];
    var result = [];
    var obj = {};

    if (currency > 10000) {
        
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        for (var i = 0; i < coins.length; i++) {
            if (number / coins[i] >= 1) {
                result[i] = Math.trunc(number / coins[i]);
                number -= result[i] * coins[i];
                if (coins[i] === 50) {
                    var h = result[i];
                    obj.H = h;
                    continue;
                } else if (coins[i] === 25) {
                    var q = result[i];
                    obj.Q = q;
                    continue;
                } else if (coins[i] === 10) {
                    var d = result[i];
                    obj.D = d;
                    continue;
                } else if (coins[i] === 5) {
                    var n = result[i];
                    obj.N = n;
                    continue;
                } else if (coins[i] === 1) {
                    var p = result[i];
                    obj.P = p;
                    continue;
                }
            }
        }
    }
    return obj;
}
