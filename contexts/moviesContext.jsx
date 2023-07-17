import { createContext, useState } from "react";

export const MoviesContext = createContext([])

const MoviesContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [tv, setTv] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <MoviesContext.Provider value={{movies, setMovies, tv, setTv, searchQuery, setSearchQuery}}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider
