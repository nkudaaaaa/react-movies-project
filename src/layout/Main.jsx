import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    handleSearch = (inputSearch, type) => {
        this.setState({loading: true});
        console.log(type+'перед fetch')
        if (type !== 'all') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputSearch}&type=${type}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}));
         } else {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputSearch}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}));
         }
    }

    render() {
        const {movies, loading} = this.state;
        return <main className="container content">
            <Search searchMovies={this.handleSearch}/>
            {
                loading ? <Preloader /> : (<Movies movies={movies} />)
            }

        </main>

     }
}
export {Main}