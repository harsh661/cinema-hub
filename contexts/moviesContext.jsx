import { createContext, useState } from "react";

export const MoviesContext = createContext([])

const MoviesContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    return(
        <MoviesContext.Provider value={{movies, setMovies, tv, setTv}}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider
