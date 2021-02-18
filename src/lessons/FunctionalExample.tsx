// import React from "react"

// // add(leftSide: 1)(rightSide: 1) // -> 2

// // const add = (leftSide: number) => (rightSide: number) =>leftSide + rightSide

// // const addOne = add(1)
// // const addSix = add(6)

// // addOne(5)

// // window.addEventListener("resize", () => {})

// // function addEventListenerWithDesponse(element, name,  handler) {
// //    element.addEventListener(name, handler)
// //    return () => element.removeEventListener(name, handler)
// // }

// // const disponse = addEventListenerWithDesponse(window, "resize",  ()=>{
// //    console.log("resizee");
// //    disponse()
// // })

// // ! // !

// // const withIdKey = withKey("id")

// // function Feed(props: {blocks: IBlockProps[]}) {
// //    return (
// //       <div>
// //          {props.blocks.map(withIdKey(Block))}
// //       </div>
// //    )
// // }

// // interface IBlockProps {
// //    title: string
// //    id: string
// // }

// // function Block(props: IBlockProps) {
// //    return (
// //       <div>
// //          {props.title}
// //       </div>
// //    )
// // }

// // function withKey(key?: string) {
// //    return<E, T extends React.ComponentType<E>>(component: T) =>
// //       (props: E, index: number) =>
// //          React.createElement(
// //             component,
// //             {...props, key: key ? props[key as keyof E] : index},
// //             [],
// //    )
// // }

// function Input({onChange, value}: {onChange: (value: string) => void, value: string}) {
//    return (
//       <input value={value} onChange={getValue(onChange)}/>
//    )
// }

// function Checkbox(props: {onChange: (value: boolean) => void, value: boolean}) {
//    return(
//       <input type="chechbox" checked={props.value} onChange={getChecked(props.onChange)}/>
//    )
// }



// export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value")
// export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked")

// //

// function NotStandardLink(props: any) {
//      return (
//       <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
//    )
// }


// interface InputProps {
//    onChange: (value: string) => void
//    value: string
// }

// function Input({value, onChange}: InputProps) {
//    return (
//       <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
//    )
// }