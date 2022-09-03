/**
 * 関数の基本
 */

function triangle(base: number, height: number) {
    return base * height / 2;
}

console.log(triangle(2,4));

/**
 * 関数によるリテラル表現
 */

let triangle2 = function(base: number, height: number): number {  return base * height / 2; }

console.log(triangle2(4,8));


/**
 * arrow関数
 * 
 * (param: ptype, ...): rtype => { ...statements... }
 */
let triangle3: (base: number, height: number) => number = 
    function  (base: number, height: number): number {
        return base * height / 2;
    }

console.log(triangle3(8,16));

/**
 * arrow関数 lambda式
 * 
 * (param: ptype, ...): rtype => { ...statements... }
 */
let triangle4 = 
    (base: number, height: number): number => {
        return base * height / 2;
    }

console.log(triangle4(16,32));

/**
 * arrow関数 lambda式 2
 */
let triangle5 = (base: number, height: number): number => base * height / 2;

console.log(triangle5(32,64));

/**
 * 省略可能な引数の宣言
 * 
 * 本来引数は必要であるが、省略したい場合
 * しかし
 */

function showTime(time?: Date): string {
    if (time === undefined) {
        return 'now: ' + (new Date()).toString();
    } else {
        if (time) {
            return 'now: ' + time.toString();
        } else {
            return 'error';
        }
    }
}

console.log(showTime());

/**
 * 引数に規定値を設定する
 */

function showTime2(time: Date = new Date()): string {
    return 'now: ' + (new Date()).toString();
}

console.log(showTime2());

/**
 * 可変長引数
 * 
 * 受け取った引数を ...valiable: ptype[] で型にリストに変換する
 */

function sum(...values: number[]): number {
    let result = 0;
    for ( let value of values ) {
        result += value;
    }
    return result;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

/**
 * 関数のオーバーロード
 * 
 * 同じ名前でありながら、引数のリスト、戻り値の値が異なる関数を定義すること
 * 他言語であれば以下のような定義をすることがよくあるが必要ない
 */
function showOverload( value: number): void;
function showOverload( value: number, text: string): void;

function showOverload( value: number | number, text?: string) : void { 
    console.log('value: ' + value.toString());
    if(text != undefined) console.log('text: ' + text);
}

showOverload(1);
showOverload(1, 'text');

// 以下のように特に定義しなくてもoverload扱いになる
function showOverload2( value: number | number, text?: string) : void { 
    console.log('value: ' + value.toString());
    if(text != undefined) console.log('text: ' + text);
}