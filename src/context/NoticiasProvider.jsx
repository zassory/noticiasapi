import { useState , useEffect , createContext } from 'react';

const NoticiasContext = createContext();

export const NoticiasProvider = ({children}) => {
    const [categoria,setCategoria] = useState('general');

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    return(
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export default NoticiasContext;