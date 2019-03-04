// Object

// Objectはプロパティの集合

// Objectを作成する
const name = "hoge";
const object = { name };
object.name;

// ブランケット記法ではプロパティ名に変数も利用できる
const languages = {
  ja: "日本語",
  en: "英語"
};

const myLang = "ja";
console.log(languages[myLang]); // "日本語"n

// オブジェクトのプロパティの分割代入
const languages = {
  ja: "日本語",
  en: "英語"
};

const { ja, en } = languages;
console.log(ja);
console.log(en);

// プロパティの存在確認
const object = { key: "value" };
// `key` プロパティが `undefined` ではないなら、プロパティが存在する
if (object.key != undefined) {
  console.group("`key`プロパティの値は`undefined`");
} // プロパティの値がundefined出会った場合にプロパティがないためundefinedなのかが区別できない

// inを使う
const object = { key: undefined };
if ("key" in object) {
  console.log("`key` プロパティは存在する");
}

// hasOwnPropertyメソッドも同じ結果を返すがここでは触れない
// 理由: プロトタイプオブジェクトについて理解しないと動作の違いが認識できない

// ObjectのStatic method

// Objectの列挙
const object = {
  one: 1,
  two: 2,
  three: 3
};

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

// Objectのマージ
// Object.assignメソッドはあるオブジェクトを別のオブジェクトに代入できる
// target Object に対して一つの sources オブジェクトを指定する
// const object = Object.assign(target, sources);
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // => { a: "a", b: "b"}

// プロパティ名がかぶったら後のに上書きされる
