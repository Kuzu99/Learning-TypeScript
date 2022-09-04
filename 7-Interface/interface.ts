/**
 * 型注釈としてのinterface
 */
interface Car {
    carType: string; // property signiture
    run(): void; // method signiture
}

let aCar: Car = {
    carType: 'トラック',
    run() {
        console.log(`${this.carType}が走ります。`);
    }
}

aCar.run();

/**
 * property signiture
 */

interface Car2 {
    readonly carType: string; // 読み取り専用　変更不可
    id? : number; // 無くてもok
}

/**
 * call signiture
 * 
 * 関数を宣言するためのシグニチャ
 */
interface Calculate {
    (x: number, y:number): number;
}

let add: Calculate = function (a: number, b:number):number {
    return a+b;
}

/**
 * method signiture
 * 
 * メソッドの型を宣言するためのシグニチャ
 */
interface Calculate2 {
    add(x: number, y:number): number;
    sub: (x: number, y:number) => number;
}

let obj: Calculate2 = {
    add(x, y): number {
        return x+y;
    },
    sub(x,y): number {
        return x+y;
    }
}

/**
 * index signiture
 * 
 * 連想配列の宣言
 */
interface NumberAssoc {
    [index: string]: number;
}

let aList: NumberAssoc = {
    'hundred': 100,
}

/**
 * constructor signiture
 * 
 * newキーワードでコンストラクターの型を宣言できる
 */
interface Figure6 {
    new(width: number, height: number): Triangle6;
}

class Triangle6 {
    constructor(private width: number, private height: number) {}
}
// Triangle型クラスをFigure型に代入
let tri6: Figure6 = Triangle6;

/**
 * Weak Type
 * 
 * すべてのプロパティが省略可能である型
 * 型チェック時に特殊な挙動になる
 */
interface MyOption {
    name?: string;
    timeout?: number;
}

/**
 * keyof
 * 
 * プロパティの集合を取得する
 */
interface Product {
    name: string;
    price: number;
}

type ProductKeys = keyof Product; // "name" | "price"

/**
 * Lookup
 * 
 * 指定のプロパティを取得する
 */
type NameType = Product['name']; // string

/**
 * Mapped Types
 * 
 * 既存の型を変換する プロパティを順番に取り出しKeyに割り当てるという
 */
type ReadonlyProduct = {
    readonly [Key in keyof Product]: Product[Key]
}
// 同じ意味
type ReadonlyProduct2 = {
    readonly name:string;
    readonly price:number;
}

/**
 * inferによる型マッチング
 * 
 * ReturnedTypeは指定された型が関数がの場合にその戻り値の型を返す
 * [note] ジェネリクスか何かがまだ理解できていないので後ほど見返す
 */
type ReturnedType<T> = T extends (...args: any[]) => infer R ? R : T;

/**
 * ユーティリティ型
 */
interface MyConfig {
    title: number;
    debug: boolean;
}

// MyConfigの全プロパティを任意型にする
type MyConfigOption = Partial<MyConfig>;

// プロパティの省略を許容 // title? debug? となる
let conf: MyConfigOption = {};

// これと同じ
interface MyConfigOption2 {
    title?: number;
    debug?: boolean;
}

/**
 * プロパティをreadonlyにする
 */

let a: Readonly<MyConfig>;

/**
 * 指定の型を持つプロパティ群を生成　Record
 */

let conf2: Record<'top' | 'contact' , MyConfig> = {
    top: { title: 1, debug: true },
    contact: { title: 2, debug: false }
}

/**
 * 特定の型から特定のプロパティだけを抽出する - Pick<T, K> k = key
 */
type SubConfig = Pick<MyConfig, 'title'|'debug'>;

/**
 * 特定の型から特定のプロパティだけを除去する - Omit<T, K>
 */
type SubConfig2 = Pick<MyConfig, 'title'|'debug'>;

/**
 * 共用型から特定の型を抽出する - Extract<T, U> U = union
*/
type Type1 = string | number | boolean;
type newType1 = Extract<Type1, string>;

/**
 * 共用型から特定の型を抽出する - Exclude<T, U> U = union
*/
type newType2 = Exclude<Type1, string>;

/**
 * null Undidefineを削除する - NonNullable<T>
 */
type Type3 = string | undefined;
type newType3 = NonNullable<Type3>;

/**
 * 関数の引数をもとに型を作成 - Parameters<T> / ConstructorParameters<T>
 * 関数の戻り値をもとに型を作成 - ReturType<T>
 */
function hogehuga(arg1: string, arg2?: boolean): string | boolean{
    return arg2 ? arg2 : arg1;
}
// type TypeP = [arg1: string, arg2?: boolean | undefined]
type TypeP = Parameters<typeof hogehuga>;
// type TypeR = string | boolean
type TypeR = ReturnedType<typeof hogehuga>;

class MyClass7 {
    constructor(arg1: string, arg2?: boolean) {}
}
// type TypeC = [arg1: string, arg2?: boolean | undefined]
type TypeC = ConstructorParameters<typeof MyClass7>;

