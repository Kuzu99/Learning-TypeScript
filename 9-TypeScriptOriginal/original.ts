/**
 * ジェネリクス：総称型
 * 
 * 汎用的なメソッド・クラスに対して特定の型を紐づける
 */
let array1: Array<number> = [1, 2, 3];

/**
 * ジェネリクスの定義
 */
class MyGenerics<T> {
    // property
    value!: T;

    // method
    getValue(): T {
        return this.value;
    }

    setValue(arg: T): void {
        this.value = arg;
    }
}
// T に stringをassing した
let stringChange = new MyGenerics<string>();
stringChange.setValue('hoge');
console.log(stringChange.getValue());

/**
 * デコレーター
 * 
 * クラスデコレーター
 * プロパティデコレーター
 * パラメーターデコレーター
 */

// @Loggerの処理
function Logger(constructor: Function) {
    console.log('ログ出力中...');
    console.log(constructor);
}

@Logger
class Cow {
    milk = "牛乳出るよ";
    
    constructor() {
        console.log('Cow オブジェクトを作成中...');
    }
}

const aCow = new Cow();
console.log(aCow);