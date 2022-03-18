/*
 * Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 */
const countSumOfTwoRepresentations = (n, l, r) => {
    let result = 0;
    for (let i = 1; i <= r; i++) {
        let a = n - i;
        if (a >= 1 && a <= r && a >= i) {
            result++;
        }
    }
    return result;
};
