class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // Access data
  get(index) {
    return this.data[index];
  }
  // Push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //Pop
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //get Array
  getArray() {
    return this.data;
  }
  // Delete
  delete(index) {
    const deletedItem = this.data[index];
    delete this.data[index];
    this.shiftItemsAfterDelete(index);
    return deletedItem;
  }

  // Shifting item after deletion
  shiftItemsAfterDelete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // delete last item because it duplicates
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("a");
newArray.push("b");
// newArray.push("c");
newArray.push("d");
newArray.push("e");

// newArray.delete(0);
// newArray.pop();
console.log(newArray.getArray());
console.log(newArray);
