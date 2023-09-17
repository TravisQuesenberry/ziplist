const chars = ['A', 'B', 'C'];
const nums = [1, 2, 3];
function zipList(first, second) {
  const list = [];
  for (let i = 0; i < first.length; i++) {
    // eslint-disable-next-line no-unused-vars
    list.push(first[i], second[i]);
  }
  return list;
}

console.log(zipList(chars, nums));

const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

console.log(zipListTheSimpleWay(chars, nums));
