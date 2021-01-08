const mistake = {[]} as Array<number>

mistake.push(1);
// mistake.push("1"); Ошибка

// type TMyBigObject = typeOf mistake;

type MyReadonly = {
   readonly [N in "asd" | "qwe"]: N
}

//  for (net N of ["asd" | "qwe"]) {}

const some: MyReadonly ={
   asd: "asd",
   qwe: "qwe"
}

type Mypartiakl<T> = {
   [N in keyof T]?: T[N]
}

// type MyPick<> = {

// }

// type picked = Pick<>