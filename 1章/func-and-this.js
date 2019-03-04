const object = {
  method() {
    const arrowFunction = () => {
      return this;
    };
    return arrowFunction();
  }
};

// 通常の`this`は`object.method`の`this`と同じ
console.log(object.method); // => object
console.log(object.method.call("THAT")); // => "THAT"
