/**
 * オブジェクト指向
 * 
 * ECMAScripts 2015移行ではclassに対応
 * note: tsc 6-ObjectOriented/object.ts --target es6 でしかコンパイルが通っていない
 */

class Person2 {
    // Property
    private name: string;
    private age: number;

    // Constructor
    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // method
    public show(): string {
        return `${this.name}は${this.age}歳です。`;
    }
}

let p = new Person2('理央', 30);
console.log(p.show());

/**
 * コンストラクターの省略
 * 
 * わかりずらい
 */

class Cat {
    constructor(private name: string, private age: number){}
}

/**
 * note: 初期化チェックについて
 * 
 * あとで初期化したいときにプロパティに!を付けてチェックを回避できる
 */
let num2!: number;

/**
 * getter/setter アクセサ
 */

 class Person3 {
    // Property
    private _name!: string;
    private _age!: number;

    // Constructor
    public constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    // method
    public show(): string {
        return `${this._name}は${this.age}歳です。`;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number){
        if(value < 0) {
            throw new RangeError('ageプロパティは正数で入力してください');
        } else {
            this._age = value;
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

/**
 * 静的メンバ
 */

class Figure {
    public static PI: number = 3.14159;

    public static circle(radius: number): number {
        return radius * radius * this.PI;
    }
}

console.log(Figure.circle(3));

/**
 * 継承 Inheritance
 * 
 * もとになるクラスのメンバを引継ぎながら新しい機能を追加したり修正したりする
 */
class BusinessPerson extends Person3 {
    work(): string {
        return `${this.name}(${this.age})はてきぱき働き`
    }
}

let w = new BusinessPerson('Reo', 20);
console.log(w.work());

/**
 * オーバーライド
 */

class BusinessPerson2 extends Person3 {
    protected clazz: string;

    constructor(name: string, age: number, clazz: string){
        super(name, age);
        this.clazz = clazz;
    }

    show(): string {
        return super.show() + `${this.clazz}です。`
    }
}

let bp = new BusinessPerson2('Rain', 23, '平社員');
console.log(bp.show());

/**
 * 抽象メソッドを使わない実装
 */

class Figure2 {
    // property
    protected width!: number;
    protected height!: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    // 面積を求める
    getArea(): number{
        return 0;
    }
}

class Triangle extends Figure2{
    getArea(): number {
        return this.width * this.height /2;
    }
}

/**
 * 抽象メソッドを使う実装
 */
abstract class Figure3 {
    // property
    protected width!: number;
    protected height!: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    
    // 面積を求める
    abstract getArea(): number;
}

/**
 * interface
 * 
 * すべてのメソッドが抽象メソッドである特別なクラス
 */

interface Animal {
    animalSound(): void;
    run(): void;
}

class Pig implements Animal {
    public animalSound(): void {
        console.log('the pig says: wee wee');
    }

    public run(): void {
        console.log('the pig runs')
    }
}

/**
 * interfaceの継承
 */

interface Bird extends Animal {
    fly(): void;
}

class Hawk implements Bird {
    public animalSound(): void {
        console.log('the hawlk says: woo');
    }

    public run(): void {
        console.log('the halk runs')
    }

    fly(): void {
        console.log('the halk runs')
    }
}