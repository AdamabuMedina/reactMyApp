// #1 concat('Hello ', 'World') // -> Hello World

type TFnConcat = (strOne: string, strTwo: string) => string;
const concat: TFnConcat = (strOne = "Hello ", strTwo = "world") => {
  return strOne + strTwo;
}

// #2 Написать интерфайс

interface IMyHomeTask {
    howIDolt: string;
    someArray: Array<string | number>;
    withData?: Array<IMyHomeTask>;
}

// #3 Типизация функций, используя Generic

interface IMyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (accumulator: T, value: T, index: T, array: Array<number>) => U, initialValue: T): U;
}

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