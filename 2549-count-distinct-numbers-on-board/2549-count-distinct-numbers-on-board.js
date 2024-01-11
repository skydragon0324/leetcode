/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    let distNumList = [n]

    for (let d = 0; d < 10 ** 9; d += 1) {
        let roundStartLen = distNumList.length
        for (let i = 1; i < n; i += 1) {
                distNumList.forEach(x => {
                    if (x % i === 1 && distNumList.includes(i) === false) {
                        distNumList.push(i);
                    }
                })
        }
        

        if (roundStartLen === distNumList.length) {
            return roundStartLen;
        }
    }

    return distNumList.length;
};