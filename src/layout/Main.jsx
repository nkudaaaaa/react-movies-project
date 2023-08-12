import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            });

    }, [])

    const handleSearch = (inputSearch, type) => {
        setLoading(true);
        if (type !== 'all') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputSearch}&type=${type}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search);
                    setLoading(false);
                });
         } else {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputSearch}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search);
                    setLoading(false);
                });
         }
    }

        return <main className="container content">
            <Search searchMovies={handleSearch}/>
            {
                loading ? <Preloader /> : (<Movies movies={movies} />)
            }

        </main>
     
}
export {Main}