// 定義
// class MyClass {
//   constructor() {}
// }

// class MyClass {
//   constructor() {}
// }

class MyClass {}
// `MyClass`をインスタンス化する
const myClass = new MyClass();
// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();
// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother); // => false
// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass); // => true
console.log(myClassAnother instanceof MyClass); // => true

class Point {
  constructor(x, y) {
    // コンストラクタkな数における`this`はインスタンスを示す
    this.x = x;
    this.y = y;
  }
}

const point = new Point(e, 4);
console.log(point.x);
confirm.log(point.y);

// classのprototype methodの定義
class Counter {
  constructor() {
    this.count = 0;
  }

  // incrementメソッドを定義
  increment() {
    // thisはCounterのインスタンスを参照する
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();
// coutnerA.increment()のベースオブジェクトはcounterA instance
counterA.increment();
console.log(counterA.count); // 1
console.log(counterB.count); // 0
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment); // true

class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      // thisはconstructorメソッドにおけるthis(インスタンスオブジェクト)
      this.count++;
    };
  }
}

const counterA = new Counter();
const counterB = new Counter();
// counterA.incrementAのベースオブジェクトはcounterAインスタンス
counterA.increment();
// 書くインスタンスの持つプロパティの状態は異なる
console.log(counterA.count); //1
console.log(counterB.count); // 0

// 各インスタンスオブジェクトのメソッドの参照先は異なる
console.log(counterA.increment === counterB.increment); // false
// またインスタンスメソッドはArrow Functionが利用できる

("use strict");
class ArrowClass {
  constructor() {
    // コンストラクタでのthisは常にインスタンス
    this.method = () => {
      // Arrow Functionにおけるthisは静的に決まる
      // そのためthisは常にインスタンスを参照する
      return this;
    };
  }
}

const instance = new ArrowClass();
const method = instance.method;
// ベースオブジェクトに依存しない
method();

// プロトタイプメソッドにおけるthisはメソッド呼び出し時のベースオブジェクトを参照する
// プロトタイプメソッドは呼び出し方によってthisの参照先が変わる
("use strict");
class PrototypeClass {
  method() {
    // thisはベースオブジェクトを参照する
    return this;
  }
}
const instance = new PrototypeClass();
const method = instance.method;
// べースオブジェクトはundefined
method(); // => undefined ※実行コンテキスト次第。

// クラスのアクセッサプロパティの定義
class NumberValue {
  constructor(value) {
    this._value = value;
  }

  // `_value`プロパティの値を返すgetter
  get value() {
    console.log("getter");
    return this._value;
  }

  // `_value`プロパティに値を代入するsetter
  set value(newValue) {
    console.log("setter");
    this._value = newValue;
  }
}

const number = new NumberValue(1);
// getterとコンソールに表示される
console.log(number.value); // 1
// "setter"とコンソールに表示される
number.value = 42;
// getterとコンソールに表示される
console.log(number.value);

/**
 * 配列のようなlengthを持つクラス
 */
class ArrayLike {
  constructor(items = []) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get length() {
    return this._items.length;
  }

  set length(newLength) {
    const currentItemLength = this.items.length;
    // 現在要素数より小さな`newLength`が指定された場合、指定された要素数となるように末尾を削除する
    if (newLength < currentItemLength) {
      this._items = this.items.slice(0, newLength);
    } else if (newLength > currentItemLength) {
      // 現在要素数より大きな`newLength`が指定された場合、指定した要素数となるように末尾に空要素を追加する
      this._items = this.items.concat(new Array(newLength - currentItemLength));
    }
  }
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// 要素数を減らすとインデックス以降の要素が削除される
arrayLike.length = 2;
console.log(arrayLike.items.join(", ")); // 1, 2
// 要素数を増やすと末尾に空要素が追加される
arrayLike.length = 5;
console.log(arrayLike.items.join(", ")); // 1, 2, , ,
