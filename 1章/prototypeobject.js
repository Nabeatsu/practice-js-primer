// プロトタイプオブジェクj

const object = {
  key: "value"
};

// インスタンスが prototype オブジェクトに定義されたものを継承する
// object.toString.prototype.toStringを参照している
console.log(object.toString === Object.prototype.toString); // true
// インスタンスからプロトタイプメソッドが呼び出せる
console.log(object.toString()); // [object Object]

// プロトタイプメソッドと同じ名前のメソッドの優先順位
const customObject = {
  toString() {
    return "custom value";
  }
};
console.log(customObject.toString()); // => "custom value"

// in 演算子と #hasOwnProperty メソッドの違い
// オブジェクト自身が指定したプロパティを持っているか確認する
// inはオブジェクト自身が持っていなければそのオブジェクトの継承元である prototype オブジェクトまで探索する

const object = {};
console.log(object.hasOwnProperty("toString")); // false
console.log("toString" in object); // true

// Object.prototypeを継承しないオブジェクトについて
const object = Object.create(null);
console.log(object.hasOwnProperty); // undefined
