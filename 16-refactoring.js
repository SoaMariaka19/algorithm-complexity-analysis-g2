/**
 * Compute the sum of an array of numbers
 * @param {array} numbers
 * @returns {number}
 */
const total = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}