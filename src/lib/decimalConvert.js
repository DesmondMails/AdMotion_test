import BigNumber from "bignumber.js";

export const decimalConvert = (balance, decimals) => {
    let eth = new BigNumber(balance)
    let shifted = eth.shiftedBy(-decimals)
    return parseFloat(shifted.c.join('.'))

}