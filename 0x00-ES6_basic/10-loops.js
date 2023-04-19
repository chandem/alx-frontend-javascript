export default function appendToEachArrayValue(array, appendString) {
  array.forEach(value => {
    value = appendString + value;
  });

  return array;
}
