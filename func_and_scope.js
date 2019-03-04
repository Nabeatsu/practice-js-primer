// 関数とスコープ

// スコープチェーン
// 関数やブロックはネスト(入れ子)して書けましたが、同様にスコープもネストできます。

{
  // OUTER ブロックスコープ
  {
    // INNER ブロックスコープ
  }
}

// 関数スコープとvarの巻き上げ(hoisting)

console.log(x); // ReferenceError: can't access lexical declaration `x' before initialization
let x = "letのx";

console.log(y); // undefined
var y = "varのy";

// 宣言部分が暗黙的に最も近い関数またはグローバルスコープの戦闘に巻き上げられて、代入部分はそのままの位置に残るという動作
// 解釈されたコード
var x;
console.log(x); // undefined
x = "varのx";
console.log(x); // => "varのx"

// ブロックスコープを無視して最も近い関数またはグローバルスコープに変数を紐付ける
function fn() {
  // 内側のスコープにあるはずの変数`x`が参照できる
  console.log(x);
  undefined;
  {
    var x = "varのx";
  }
  console.log(x); // varのx
}
// 以下のように解釈される
// 解釈されたコード
function fn() {
  // もっとも近い関数スコープの先頭に宣言部分が巻き上げられる
  var x;
  console.log(x); // => undefined
  {
    // 変数への代入はそのままの位置に残る
    x = "varのx";
  }
  console.log(x); // => "varのx"
}
fn();

// 関数宣言とhoisting
// functionを使った関数宣言もvarと同様に、最も近い関数またはグローバルスコープの戦闘に巻き上げされる。
hello(); // "Hello"

function hello() {
  return "Hello";
}

// クロージャ
// 基本的な動きはSwiftと似ていて疑問なし

// 静的スコープ どの識別子がどの変数を参照しているか静的に決定する性質
const x = 10;

function printX() {
  // 常にconst x = 10 の x を参照する
  console.log(x); // 10
}

function run() {
  const x = 20;
  printX(); // 常に10
}

// JavaScriptのメモリ管理の仕組み
// ガベージコレクション

let x = "before text";
// 変数 x に新しい値を代入する
x = "after text";
// この時 before text というデー5アハどこからも参照されなくなる
// その後、ガベージコレクションによってメモリから開放される

// JavaScriptのクロージャはここまでで出てきた静的スコープとメモリ管理の歯k味を利用して関数内から特定の変数を参照し続けることで関数が状態を持つことが出来る仕組みのことを言う

const createCounter = () => {
  let count = 0;
  return function increment() {
    // increment 関数は外のスコープの変数 count を参照している
    // これがクロージャーと呼ばれる
    count = count + 1;
    return count;
  };
};

// createCounter()の実行結果は、内側で定義されていた increment 関数
const myCounter = createCounter();
// myCounter関数の実行結果は count の評価結果
myCounter(); // 1
myCounter(); // 2
