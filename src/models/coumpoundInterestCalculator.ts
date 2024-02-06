export default class CompoundInterestCalculator {
  constructor(public interestRate: number) {}

  calculateInterest(numYears: number, startingSum: number): number {
    let calculatedSum = startingSum;

    for(let i = 0; i < numYears; i++) {
      calculatedSum += calculatedSum * this.interestRate;
    }
    return calculatedSum;
  }
}