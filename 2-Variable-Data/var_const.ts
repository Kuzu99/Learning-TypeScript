/**
 * var と let
 * 
 * var は TypeScriptでは非推奨
 */

if (true) {
    var i: number = 1;
}

console.log(i); // ブロックスコープを認識しない

var i: number = 2;

console.log(i); // 上書きされる

/**
 * const と let
 * 
 * 再代入できない
 */

const aNum : number = 2;
// aNum = 3; 定数であるため、'aNum' に代入することはできません。ts(2588)