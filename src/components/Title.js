import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Title = ({item, handleClick}) => {

    const [title, setTitle] = React.useState([]);
    const [cast, setCast] = React.useState([]);

    React.useEffect(async () => {
        await axios.get(`https://imdb-api.com/en/API/Title/k_2twlf89c/${item.id}`)
            .then(res => {
                setTitle(res.data);
            })
    }, []);

    React.useEffect(async () => {
        await axios.get(`https://imdb-api.com/API/FullCast/k_2twlf89c/${item.id}`)
            .then(res => {
                setCast(res.data.actors);
            })
        console.log("cast: ", cast);
    }, [title]);

    React.useEffect(() => {
        console.log(cast);
    }, [cast]);


    return (
        <div style={{margin: "20px", display: "flex"}}>
            <div>
                <h1>{title.title}</h1>
                <p>{title.year} . {title.contentRating} . {title.runtimeStr}</p>
                <div style={{display: "flex"}}>
                    <img src={title.image} width={"300vw"} alt="poster"/>
                    <p style={{fontSize: "20px", borderBottom: "1px solid grey"}}>{title.plot}</p>
                </div>
                <h3>{title.genres}</h3>
                <h2>Full Cast:</h2>
                <div>
                    {/*{title.actorList[0].name}*/}
                    {cast.map(actor => {
                        return (
                            <Link to={`/actor/${actor.id}`}>
                                <div style={{display: "flex"}} onClick={() => handleClick(actor)}>
                                    <img width={"100px"} height={"100px"} src={actor.image} alt="actor"/>
                                    <p>{actor.name} <br/> as {actor.asCharacter} </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

export default Title;