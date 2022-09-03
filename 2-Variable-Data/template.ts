/**
 * テンプレート文字列
 * 
 * 構文
 * ` ${ valiable } `
 */

const mail: String = 'test@example.com';
const msg: String = `レビュアー募集!（送付先: ${mail}）`;

console.log(msg);