import { createContext, useContext, useState } from "react";


const UserContext = createContext(null);
const UserProvider = ({children}) => {
    var [state, setState] = useState("bye_red")
    return <UserContext.Provider value={state}>
        {children}
    </UserContext.Provider>
}

const useCustomHookForContext = () => {
    return useContext(UserContext);
}

export {UserContext, UserProvider, useCustomHookForContext};


