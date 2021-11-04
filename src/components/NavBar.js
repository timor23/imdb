import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"ui secondary pointing menu"} style={{justifyContent: "center"}}>
            <Link to={"/"}  className={"item"}>
                Home
            </Link>
            <Link to="/top250" className={"item"}>
                Top Rated Movies
            </Link>
            <Link to="/boxoffice" className={"item"}>
                TV Shows
            </Link>

            <input type="text" />

        </div>
    );
}

export default NavBar;