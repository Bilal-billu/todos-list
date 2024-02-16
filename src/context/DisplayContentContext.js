import { useContext, createContext } from "react"

export const MainContext = createContext({
    listAndAdd:
    {
        list: true,
        add: true,
        about: false
    },
    listOnly:()=>{},
    addOnly:()=>{},
    bothListAdd:()=>{},
    aboutOnly:()=>{}
})


export const useMainContent = () => {
    return useContext(MainContext);
}

export const ProviderMainContext = MainContext.Provider;