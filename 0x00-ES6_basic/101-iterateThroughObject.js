export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (let i = 0; i < reportWithIterator.length; i += 1) {
    if (i !== reportWithIterator.length - 1) {
      output += `${reportWithIterator[i]} | `;
    } else {
      output += `${reportWithIterator[i]}`;
    }
  }

  return output;
}
