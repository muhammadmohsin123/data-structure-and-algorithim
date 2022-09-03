//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//Naive solution
//Time Complexity: O(n^2)
const FirstRecurringChar = (array) => {
  //Loop throuh array outer array to increment index by 1 and inner array to decrement index by 1
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(array[i], array[j]);
      if (array[i] === array[j]) return array[i];
    }
  }
  return undefined;
};
// console.log(FirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Efficient approach

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
}
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
