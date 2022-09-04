// tscでコンパイル後に　import { showMessage, AppUtil } from './App.js'; jsファイルを変更しないといけない
import { showMessage, AppUtil } from './App';

showMessage();
console.log(AppUtil.getVersion());