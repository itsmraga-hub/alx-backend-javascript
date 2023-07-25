export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    const value = appendString + idx;
    idx = value;
  }

  return array;
}
