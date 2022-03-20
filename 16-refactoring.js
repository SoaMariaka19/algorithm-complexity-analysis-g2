/**
 * Compute the sum of an array of number by finding its max value and removing it
 * @param {array} numbers
 * @returns {number}
 */
const total = (numbers) => {
    let sum = 0;
    const n=numbers.length
    for (let i = 0; i < n; i++) {
        let max=Math.max(...numbers)
        sum+=max;
        numbers.splice(numbers.indexOf(max),1)
    }
    return sum;
}
