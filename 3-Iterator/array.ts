/**
 * 配列
 */

let data1: string[] = ['Java', 'Python'];
let data2: Array<string> = ['C++', 'C#'];

/**
 * 多次元配列
 */

let data3: number[][] = [[1, 1], [1, 2], [2, 1], [2, 2]]

/**
 * 読み取り専用の配列 readonly
 * 
 * 一次元目の要素だけになってしまう
 */

let data4: readonly number[][] = [[1, 1], [1, 2], [2, 1], [2, 2]]
data4[1][1] = 5;
console.log(data4);
//data4[0] = [2, 2]; 型 'readonly number[][]' のインデックス シグネチャは、読み取りのみを許可します。ts(2542)

/**
 * 疑問
 * 
 * const と readonly の違いは？
 * 
 * 
 * Answer
 * 
 * const: 変数への代入を禁止する
 * readonly: プロパティへの代入を禁止する
 */

const text1: string = 'mytext';
//text = 'newtext';
// 定数であるため、'text' に代入することはできません。ts(2588)

//let text2: readonly string = 'mytext';
// 'readonly' 型の修飾子は、配列およびタプル リテラル型でのみ使用できます。ts(1354)

const list1: number[] = [1,2,3];
list1[0] = 10; // 代入されてしまう
console.log(list1);

let list2: readonly number[] = [1,2,3];
//list2[1] = 10;
// 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。ts(2542)

const n: number = 2;
// n = 3; 定数であるため、'n' に代入することはできません。ts(2588)

let point: { readonly x: number } = { x : 1 };
// point.x = 3; 読み取り専用プロパティであるため、'x' に代入することはできません。ts(2540)

/**
 * Tuple
 * 
 * 複数の異なる型の集合を表現するデータ型
 * 一般的にはinterface/classを利用したほうがいい
 */

let tuple1: [string, number, boolean] = [ 'hoge', 777.77, false ];
console.log(tuple1[0].substring(1));
console.log(tuple1[1].toFixed(1));
console.log(tuple1[2] === false);