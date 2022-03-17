/*
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth rate.
 * With the assumption that you don't make any additional deposits,
 * find out how long it would take for your balance to pass a specific threshold.
 */
const depositProfit = (deposit, rate, threshold) =>
  Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1));
