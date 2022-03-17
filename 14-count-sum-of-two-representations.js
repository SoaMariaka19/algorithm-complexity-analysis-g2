/*
 * Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 */
const countSumOfTwoRepresentations = (n, l, r) => {
    let result = 0; // 1
    for (let i = 1; i <= r; i++) { // 3
        let a = n - i; // 4
        if (a >= 1 && a <= r && a >= i) { // 8
            result++; // 1
        }
    }
    return result; // 1
};

/*
    T14(r) = 1 + 3r(4+8+1) + 1
    O(r) = r
*/
