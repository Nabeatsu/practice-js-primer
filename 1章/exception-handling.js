// 例外処理
// try...catch

try {
  console.log("この行は実行されます");
  // 未定義の関数呼び出し
  undefinedFunction();
} catch (error) {
  console.log("この行は実行されます");
  console.log(error instanceof ReferenceError); // true
  console.log(error.message); // => undefinedFunction is not defined
} finally {
  // deferみたいなもん
  console.log("この行は実行されます");
}

// throw statement
try {
  throw new Error("例外が投げられました");
} catch (error) {
  console.log(error.message); // => 例外が投げられました
}

// エラーオブジェクト
function assertPositiveNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive`);
  }
}

try {
  assertPositiveNumber(-1);
} catch (error) {
  console.log(error instanceof Error); // true
  console.log(error.message); // -1 is not positive
}
