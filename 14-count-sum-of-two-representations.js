/*
 * Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 */
const countSumOfTwoRepresentations = (n, l, r) => {
    let result = 0; // 1
    for (let i = 1; i <= r; i++) { // 6
        let a = n - i; // 4
        if (a >= 1 && a <= r && a >= i) { // 8
            result++; // 2
        }
    }
    return result; // 1
};

/*
    5 => 1
    6 => 6
    7 => 4
    8 => 8
    9 => 2
    12 => 1

    T1(n) = 1 + 6r(4 + 8 + 2) + 1 = 1 + r (1) + 1*

    O(n) = n => complexité linéaire
 */
