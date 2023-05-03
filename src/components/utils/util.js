const vat = 0.075;

export const _convertArrOfObjToArr = (arr) => {
  let result = [];
  for (let o of arr) {
    result.push(Object.values(o));
  }
  return result;
};

export const _getVAT = (amount) => parseFloat(amount) * vat;
// export const _getTotalVAT = amount => parseFloat(amount) + vat

export function getUniqueArray(array) {
  var uniqueArray = [];

  // Loop through array values
  for (var value of array) {
    if (uniqueArray.indexOf(value) === -1) {
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
}

export const pendingStatus = "#FFA500"
export const approvedStatus = "#00ff00"
export const rejectedStatus = "#ff4d4d"
export const unfinished ="#bf1f0a"
export function checkStrEmpty(str) {
  return !(str && str.length > 1 && str.split(' ').join('').length > 0)
}
