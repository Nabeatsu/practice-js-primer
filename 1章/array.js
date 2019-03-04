// 配列は特別なオブジェクト
typeof ["A", "B", "C"]; // "Object"

// 区別できない
const array = [];
// `length` を持つオブジェクト
const ojebct = {
  length: 0
};

// Array.isArray を使って区別する
console.log(Array.isArray(array)); // true
console.log(Array.isArray(object)); // false

// 存在しないインデックスへのアクセスは例外を返さない
const array = [1, 2, 3];
array[3]; // undefined

// JavaScript では疎な配列を定義できる。この場合の length の挙動には注意
const sparseArray = [1, , 3];
console.log(sparseArray.length); // 3
console.log(sparseArray[1]); // undefined

// undefinedの要素と未定義の要素の違い
