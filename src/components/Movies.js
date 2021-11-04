import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Movies = ({handleClick}) => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(async () => {
        await axios.get("https://imdb-api.com/en/API/Top250Movies/k_2twlf89c")
            .then(res => {
                setMovies(res.data.items);
                // console.log(movies);
            });
    }, []);

    React.useEffect(() => {
        console.log(movies);
    }, [movies]);


    return (
        <div>
            <h1>Top Rated Movies Of All Times</h1>
            <ol>
                {movies.map(title => {
                    return (
                        <li onClick={() => handleClick(title)}>
                            <Link to={`/movies/${title.id}`}>{title.title}</Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Movies;