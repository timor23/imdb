import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(async () => {
        await axios.get("https://imdb-api.com/en/API/ComingSoon/k_2twlf89c")
            .then(res => {
                setMovies(res.data.items);
                // console.log(movies);
            });
    }, []);

    return (
        <div style={{
            marginRight: "200px",
            marginLeft: "200px",
            justifyContent: "center",
            textAllign: "center",
            allignItems: "center"
        }}>

            <h1>Coming Soon</h1>
            {movies.map(title => {
                return (
                    <div>
                        <Link to={`/movies/${title.id}`}>
                            <h1>{title.title}</h1>
                            <p>{title.year} . {title.contentRating} . {title.runtimeStr}</p>
                            <div style={{display: "flex"}}>
                                <img src={title.image} width={"300vw"} alt="poster"/>
                                <p style={{fontSize: "20px", borderBottom: "1px solid grey"}}>{title.plot}</p>
                            </div>
                            <h3>{title.genres}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;