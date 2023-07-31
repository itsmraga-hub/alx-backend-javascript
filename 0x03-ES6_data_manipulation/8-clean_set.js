export default function cleanSet(set, startString) {
  const newSet = new Set();
  for (const str of set) {
    if (str.includes(startString) && startString.length > 0) {
      const s = str.slice(startString.length);
      newSet.add(s);
    }
  }
  return Array.from(newSet).join('-');
}
