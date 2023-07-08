import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch('https://seleksi-sea-2023.vercel.app/api/movies')
            const res = await response.json();
            setMovie(res)
            console.log(res)
        }
        fetchMovie();
    }, [])
    return <MovieContext.Provider value={{movie}}>{children}</MovieContext.Provider>;
}

export default MovieProvider