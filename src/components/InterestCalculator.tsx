import React from "react";
import CompoundInterestCalculator from "../models/coumpoundInterestCalculator";

let calculator = new CompoundInterestCalculator(0.08);
let finalBalance = calculator.calculateInterest(6.0, 16000000);

const InterestCalculator = () => {
  //let finalBalanceString = finalBalance.toString;
  return <div>{finalBalance}</div>;
};

export default InterestCalculator;
