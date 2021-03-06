import React from 'react'
import axios from 'axios'
import Movie from '../components/movie'
import './Home.css'
class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor')
    }
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () =>{
        // const movies = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
        console.log(movies);
        this.setState({ movies, isLoading: false });

    }

    componentDidMount() {
        this.getMovies();
    }

    render(){
        console.log('render')

        const {isLoading, movies} = this.state;

        return (
            <section className="container">
                {isLoading ?(
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className={"movies"}>
                        {movies.map(movie =>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        )}
                    </div>

                )}</section>
        )
    }
}

export default Home