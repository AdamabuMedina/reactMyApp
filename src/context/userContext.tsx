import React from 'react'
import useUserData from '../hooks/useUserData'

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

const userContext = React.createContext<IUserContextData>({})

export default userContext

export function UserContextProvider({children}: {children: React.ReactNode}) {
  const [data] = useUserData()
  
  return(
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}