import { useState , useEffect , createContext } from 'react';

const NoticiasContext = createContext();

export const NoticiasProvider = ({children}) => {


    return(
        <NoticiasContext.Provider
            value={{
                
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export default NoticiasContext;