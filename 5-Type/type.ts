/**
 * 共用型 union types
 */

let data: string | boolean;
data = 'hoge';
data = false;

let array: (string | boolean)[] = ['hoge', false];

/**
 * 型ガード primitive型編
 * 
 * 
 * 変数の型を判定して対象の変数の型を特定する
 * typeof 演算子はprimitive型にしか使えない
 */

function process(value: string | number) {
    if(typeof value === 'string') {
        return value.toUpperCase();
    }
}

/**
 * 型ガード クラス型　編
 * 
 * instanceof / in 演算子
 */

class Person {
    id!: number;
    name!: string;
}

class Dog {
    id!: number;
    name!: string;
}

function check(aObject: Person|Dog): void {
    if (aObject instanceof Person) {
        console.log('person');
    }
}

/**
 * null 許容
 */

// null 許容する
let data5: string | null = null;

// hogeがnullかundefinedでない時、string型であるので hoge.trim()を実行する
let hoge: string | null | undefined;
let result = (hoge === null || hoge === undefined) ? undefined : hoge.trim();

/**
 * n?. 演算子
 * 
 * objectがnullかundefineでないとき、そのメンバーにアクセスできる
 */
let result1 = hoge?.trim();

/**
 * ?? 演算子
 * 
 * nullかundefinedの場合の規定値を設定する
 */

let result2 = hoge ?? 'null or undegined';

/**
 * 型エイリアス
 * 
 * 型に名前を付ける
 */
type Menber = {
    nickName: string;
    isHuman: boolean;
    level: number;
};

let apple: Menber = { nickName: 'りんご', isHuman: true, level: 1 };
console.log(apple);

/**
 * interfaceとの違いは？
 * 
 * type 
 *   文末にセミコロンがいる
 * interface 
 *   文末にセミコロンがいらない　
 * 
 */

// 一緒に見える...
interface Menber2 {
    nickName: string;
    isHuman: boolean;
    level: number;
}// ここでセミコロンがいらない

let apple2: Menber2 = { nickName: 'りんご', isHuman: true, level: 1 };
console.log(apple2);

// 拡張の方法が異なる

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
interface ArtistsData {
    artists: { name: string }[];
}

type ErrorHandling2 = {
    success: boolean;
    error?: { message: string };
};
  
type ArtistsData2 = {
    artists: { name: string }[];
};

// ここに利用方法差分がある
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-type
interface ArtistsResponse extends ErrorHandling, ArtistsData {}
type ArtistsResponse2 = ArtistsData2 & ErrorHandling2;

const dummyData: ArtistsResponse = {
    artists: [{ name: "apple" }, { name: "banana" }],
    success: true
};

const dummyData2: ArtistsResponse2 = {
    artists: [{ name: "apple" }, { name: "banana" }],
    success: true
};

/**
 * Type 文字列　リテラル　としての利用方法
 */

type Serson = 'spring' | 'summer' | 'aurunmn' | 'womter';
let getSeason = (aSeason: Serson) => console.log(aSeason);
getSeason('aurunmn');