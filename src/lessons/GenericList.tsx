import React from "react";

interface IItem {
    id: string
    text: string
    onClick?: (id: string) => void
    className?: string
    As?: "a" | "li" | "button" | "div"
    href?: string
}

interface IMyGenericProps {
    list: IItem[]
}

const noop = () => {
}

export function GenericList({list}: IMyGenericProps) {
    return (
        <>
            {list.map(({As = "div", text, onClick = noop, id, className, href}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    )
}


// interface IMyListProps {
//     list: IItem[]
// }
//
// export function MyList({list}: IMyListProps) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     )
// }
