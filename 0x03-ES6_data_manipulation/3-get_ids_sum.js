export default function getStudentsIdsSum(arr) {
  return arr.reduce((sum, obj) => sum + obj.id, 0);
}
