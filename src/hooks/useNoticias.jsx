import { useContext } from 'react';
import NoticiasContext from '../context/NoticiasProvider';

export const useNoticias = () => {
    return useContext(NoticiasContext);
}