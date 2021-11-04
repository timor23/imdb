import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Actor = ({item, handleClick}) => {

    const [actor, setActor] = React.useState("");
    const [filmography, setFilmography] = React.useState([]);
    const [knownFor, setKnownFor] = React.useState([]);

    React.useEffect(async () => {
        setActor("");
        await axios.get(`https://imdb-api.com/API/Name/k_2twlf89c/${item.id}`)
            .then(res => {
                setActor(res.data);
                // setFilmography(res.data.castMovies.data);
                // setKnownFor(res.data.knownFor.data);
            })
    }, []);

    // React.useEffect(async () => {
    //     await axios.get(`https://imdb-api.com/API/FullCast/k_2twlf89c/${item.id}`)
    //         .then(res => {
    //             setFilmography(res.data);
    //         })
    // }, [actor]);

    // React.useEffect(() => {
    //     console.log(actor);
    //     setFilmography(actor.castMovies.data)
    // }, [actor]);

    React.useEffect(() => {
        console.log(actor);
        console.log(filmography)
    }, [actor]);

    return (
        <div style={{marginRight: "200px"
                    ,marginLeft: "200px"}}>
            <div>
                <h1>{actor.name}</h1>
                <p>{actor.role}</p>
                <div style={{display: "flex"}}>
                    <img src={actor.image} width={"300vw"} alt="actor"/>
                    <div style={{marginLeft: "5px"}}>
                        <p> {actor.summary} </p>
                        <h3>{actor.awards}</h3>
                        <h3>Born: {actor.birthDate}</h3>
                        {actor.deathDate
                            ? <h3>Death: {actor.deathDate}</h3> : null}
                        <h3>Known for:</h3>
                        {/*<p>{actor.knownFor[0].title}</p>*/}
                    {/*    <ul>*/}
                    {/*        {actor.knownFor.map(title => {*/}
                    {/*            return (*/}
                    {/*                <li>*/}
                    {/*                    {title.title};*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </ul>*/}
                    </div>
                </div>
            </div>

            <h2>Filmography:</h2>
            {/*<div>*/}
            {/*    {actor.castMovies.map(title => {*/}
            {/*        return (*/}
            {/*            <Link to={`/title/${title.id}`}>*/}
            {/*                <div style={{display: "flex"}} onClick={() => handleClick(title)}>*/}
            {/*                    <img width={"100px"} height={"100px"} src={title.image} alt="title"/>*/}
            {/*                    <p>{title.name} <br/> as {title.asCharacter} </p>*/}
            {/*                </div>*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}


        </div>
    )
}

export default Actor;