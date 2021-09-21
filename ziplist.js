const testList = ['a', 'b', 'c'];
const testList1 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i]);
    resultList.push(list2[2]);
  }
  return resultList;
}
console.log(zipList(testList, testList1));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList));
