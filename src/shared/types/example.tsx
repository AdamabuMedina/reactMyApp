// const str = "string";
// const num = 2;
// const nan = NaN;
// const obj = {};
// const arr = [];
// const nul = null;
// const sym = Symbol();
// const und = undefined;
// const _void = void 0;
// const bool = true;
// const fn = () => {};

// // "some" + 2 // -> "some2"
// // "some" - 2 // -> NaN
// // "2" + 2 // -> "22"
// // "2" - 2 // -> NaN

// const tsNumber = 2;
// const tsString = "str"

// const result = tsNumber + tsString
// const resultTwo = parseInt(tsString) - tsNumber

// if (typeof tsString === "number") {
//     const resultTwo = tsString - tsNumber
// }

// //Union type
// const strOrNumber: string | number = "2"

// // type alias
// type StrOrNumber = string | number

// const strOrNumber1: string | number = "2"
// const strOrNumber2: string | number = "2"
// const strOrNumber3: string | number = "2"

// type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol

// //Array
// const tsArray: number[] = [1, 2, 3,]
// const tsArrayGeneric: Array<number> = []

// const unionArray: (string | number)[] = [1, 2, "3"]
// const unionArray1: Array<string | number> = [1, 2, "3"]

// //Tuple
// const myTuple: [number, string] = [1, "2"]
// const [val1, val2] = myTuple

// //const [state, setState] = useState()

// //!Object
// type MyObjType = {a: number, b: string}
// const myObj: MyObjType = {a: 1, b: "2"}

// interface MyFirstInterface {
//     readonly a: number;
//     b: string;
//     c: number[];
// }

// const  myObj2: MyFirstInterface = {
//     a: 2,
//     b: "123",
//     c: [1]
// }

// const ApiAnswer: IndexInterface = {key: "asd", key1: "asd"}
// const val3 = ApiAnswer.randomkey;
// interface IndexInterface {
//     [N: string]: string
// }

// // calculate ("add", 5, 5)// -> 10

// enum Methods {
//     add,
//     sub,
// }

// function calculate(method: Methods, left: number, right: number): number {
// switch (method) {
//     case Methods.add: return left + right;
//     case Methods.sub: return left - right
//     }
// }

// const sum = calculate(Methods.sub, 2, 2)

// const ArrowFn: FnInterface = (value) => 2;

// type TypeFn = () => number

// interface FnInterface {
//     (a: number): void;
// }


// type StrangeTsTypes = any | unknown | never

// const some: any = 2
// some.reduce()

// const un: unknown = 2;

// if (typeof un === "string") {
//     un.concat()
// }

// function neverFn(): void {
// throw new Error ("my exception")
// }

// const someValue = neverFn()

// !Generic
const myArray: MyArray<number> = [1, 2, 3]

interface MyArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: MyArray<T> ) => U ): MyArray<U>
}

let variable = myArray[1];
myArray.map((f, index, arr: MyArray<number>) => f + 1);
myArray.map((f) => `f + ${f}`);

[1, 2, 3].map((f) => f + 1);
[1, 2, 3].map((f) => `f + ${f}`);

function identity<T>(arg: T): T {
    return arg
}

let result = identity(12);

function getLet<T extends Array<any>>(arr: T): number {
    return arr.length
}

getLet([1, 2, 3]);

interface IValueWithType<T> {
    type: string;
    value: T
}

function withType<U>(arg: U):IValueWithType<U>  {
    return {
        type: typeof arg,
        value: arg
    }
}

const result2 = withType(123)

// Встроенные genetics
interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, "isEmpty" | "value"> = {
 type: "asd"
};

const picked: Pick<IExample<number>, "isEmpty" | "value"> = {
    isEmpty: true,
    value: 123
}

const partial: Partial<IExample<object>> = {

}

// !Классы

class Constructor {
    field: number = 123;

    constructor(arg: number) {
        this.field = arg;
    }

    public publicMethod() {
        return this.field
    }

    protected protectedMethod() {
        return this.field + 10
    }

    private privateMethod() {
        return this.field + 30
    }
}

const instace = new Constructor(123)

class Child extends Constructor {
    public childMethod() {
    }
}

abstract class AbstractClass {
    public abstract abstractField: number;

    public abstract abstractMethod(): number;

    protected protectedMethod() {
        return this.abstractField;
    }
}

class NewChild extends AbstractClass {
    public abstractMethod(): number {
        throw new Error("Method not implemented.");
    }
    public abstractField: number = 123;


}

interface MyInterface<T> {
    field: string;
    method(): string;
}

class NewClass<T> implements MyInterface<T> {
    field: string = "123";
    public conf?: T;
    method(): string {
        throw new Error("Method not implemented.");
    }

}

// class MyComponent extends React.Component<{prop1: number}, {state1: string}, any> {
//     constructor(props: {prop1: number}) {
//         super(props);
//         this.state = {
//             state1: "123"
//         }
//     }

//     public render() {
//         return (
//             <div>{this.props.prop1}</div>
//         )
//     }

// }