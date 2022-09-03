/**
 * 1. 構文
 * let name: type = initial;
 */

let num: Number = 1;
let str: String = 'test';
let flag: Boolean = true;
let no: any;// 任意の型を許容する 非推奨 共用型を使うべき
let un: undefined;// vueだと追跡されなかった
let nu: null;

console.log(num);
console.log(str);
console.log(flag);
console.log(no); // undifine
console.log(un);
//console.log(nu); null参照の例外が発生
