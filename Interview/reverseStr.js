const reverseString = (str) => {
  let newString = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }

  return newString;
};

//console.log(reverseString("hello"));

// Recursive way

const reverseStringRecursive = (str) => {
  console.log(str.slice(0, -1));
  if (str.length === 1) {
    return str;
  }

  return str.slice(-1) + reverseStringRecursive(str.slice(0, -1));
};
console.log(reverseStringRecursive("mohsin"));
