const str = "string";
const num = 2;
const nan = NaN;
const obj = {};
const arr = [];
const nul = null;
const sym = Symbol();
const und = undefined;
const _void = void 0;
const bool = true;
const fn = () => {};

// "some" + 2 // -> "some2"
// "some" - 2 // -> NaN
// "2" + 2 // -> "22"
// "2" - 2 // -> NaN

const tsNumber = 2;
const tsString = "str"

const result = tsNumber + tsString
const resultTwo = parseInt(tsString) - tsNumber

if (typeof tsString === "number") {
    const resultTwo = tsString - tsNumber
}

//Union type
const strOrNumber: string | number = "2"

// type alias
type StrOrNumber = string | number

const strOrNumber1: string | number = "2"
const strOrNumber2: string | number = "2"
const strOrNumber3: string | number = "2"

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol

//Array
const tsArray: number[] = [1, 2, 3,]
const tsArrayGeneric: Array<number> = []

const unionArray: (string | number)[] = [1, 2, "3"]
const unionArray1: Array<string | number> = [1, 2, "3"]

//Tuple
const myTuple: [number, string] = [1, "2"]
const [val1, val2] = myTuple

//const [state, setState] = useState()

//!Object
type MyObjType = {a: number, b: string}
const myObj: MyObjType = {a: 1, b: "2"}

interface MyFirstInterface {
    readonly a: number;
    b: string;
    c: number[];
}

const  myObj2: MyFirstInterface = {
    a: 2,
    b: "123",
    c: [1]
}

const ApiAnswer: IndexInterface = {key: "asd", key1: "asd"}
const val3 = ApiAnswer.randomkey;
interface IndexInterface {
    [N: string]: string
}

// calculate ("add", 5, 5)// -> 10

enum Methods {
    add,
    sub,
}

function calculate(method: Methods, left: number, right: number): number {
switch (method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right
    }
}

const sum = calculate(Methods.sub, 2, 2)

const ArrowFn = () => {}


type StrangeTsTypes = any | unknown | never
