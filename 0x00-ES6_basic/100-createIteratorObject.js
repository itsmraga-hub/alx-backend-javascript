export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);

  const newArr = [].concat(...arr);
  return newArr;
}
