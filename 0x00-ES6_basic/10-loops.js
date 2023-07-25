export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let idx of array) {
    const value = appendString + idx;
    arr.push(value);
  }

  return arr;
}
