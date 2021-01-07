// #1 concat('Hello ', 'World') // -> Hello World

function concatStr(strOne: string, strTwo: string) {
    return strOne.concat(strTwo)
}

// #2 Написать интерфайс

interface IMyHomeTask {
    howIDolt: string;
    someArray: Array<string | number>;
    withDate: { howIDolt: string; someArray: Array<string | number> }[];
}

const IMyHomeTask: IMyHomeTask = {
    howIDolt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withDate: [
        { howIDolt: "I Do It Wel", someArray: ["string one", "string two", 42] },
    ],
}

// #3 Типизация функций, используя Generic

interface IMyArrayReduce<T> {
    [N: number]: T;

    reduce(fn: (accumulator: T, value: T) => T, initialValue: number): T;
}

const arNumber: IMyArrayReduce<number> = [1, 2, 3]
const initialValue: number = 0
arNumber.reduce((ac, val) => ac + val, initialValue)
const arString: IMyArrayReduce<string> = ["1", "2", "3"];
arNumber.reduce((ac, val) => ac + val, initialValue)

// #4Работа с MappedTypes

interface IHomeTask {
    data: string;
    numberData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type TMyPartialFour<T> = {
    [N in keyof T]?: T[N] extends object ? TMyPartialFour<T[N]> : T[N];
}

const homeTask: TMyPartialFour<IHomeTask> = {
    externalData: {
        value: "win",
    },
}

const homeTask2: TMyPartialFour<IHomeTask> = {
    externalData: {
        value: "win",
        basis: 15,
    },
}

// Сложные примеры
// #5 Работа с Generic, Mapped Types, Type inference №1

import * as React from "react"

interface IProps {
    firstProps: string;
    secondProp: number;
}

function HomeComponent(props: { firstProps: string; secondProp: number }) {
    return <div>{[props.firstProps, props.secondProp]}</div>;
}

type TMyType<T> = T extends React.ComponentType<infer props> ? props : never;
type TProps = TMyType<typeof HomeComponent>;
const t: TProps = {
    firstProps: "string",
    secondProp: 152,
};
console.log(t)

// #6 Работа с Generic, Mapped Types, Type inference №2

let divE: TDivProps = {
    className: "class",
    id: "body",
    "aria-hidden": true
}

type TDivProps = TGetJSXPropsProp<"div">

type TAllProps<K extends keyof JSX.IntrinsicElements> = {
    [N in K]: JSX.IntrinsicElements[N];
}

type TGetJSXPropsProp<K extends keyof JSX.IntrinsicElements> = Exclude<
    TAllProps<K>[keyof TAllProps<K>],
    React.DOMAttributes<null>
    >;