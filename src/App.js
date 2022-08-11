import { useState,useEffect } from 'react'

import Typewriter from 'typewriter-effect';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=c90166ff';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] =useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman');
    }, []);
    return(
        <div className="app">
            <h1>
            <Typewriter 
            onInit = { (typewriter) => {
              typewriter.typeString("CineFlix")
              .pauseFor(2000)
              .start();
            }
            }
            />
            </h1>
            <div>
            <h3 style={{ color: "white" }}>
            <Typewriter 
            onInit = { (typewriter) => {
              typewriter.typeString("Developed by Yash Sharma")
              .deleteAll()
              .typeString("19BIT0133")
              .deleteAll()
              .typeString("Developed by Yash Sharma")
              .start();
            }

            }
            />  
            </h3>
            </div>
            
            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange= {(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}  /*empty callback function*/
                />
            </div>

            {movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie ={movie} />
                        ) )}
                    </div>

                ) :
                (
                    <div>
                        <h2>No Movies found</h2>
                    </div>    
                )}    
        </div>
    );
}

export default App;