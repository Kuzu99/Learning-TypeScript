/**
 * 型アサーション
 * 
 * データ型を<型名>で明示的に変換する
 */

function show( result: String ){
    return `result: ${result}`;
}

// console.log(show(100)); error
console.log(show(<any> 100));
console.log(show('100' as any));

// コンパイルは通るが不正なのでできるだけやるべきでない