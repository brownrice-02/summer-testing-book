// src/utils/divideNumbers/divideNumbers.js
const divideNumbers = (num, den) => {
    if (den === 0) {
      throw new Error('Cannot divide by zero');
    }
    return num / den;
};
export default divideNumbers;
  