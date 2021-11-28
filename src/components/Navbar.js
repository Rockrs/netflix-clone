import React from 'react';
import "./Navbar.css"

function Navbar(props) {
    const {refkeys} = props;

    function ScrollHandler(e){
        const movieType = e.target.textContent;
        const currentElement = refkeys[movieType].current;
        const tops = currentElement.getBoundingClientRect().y;
        window.scrollBy(0,tops - 135);
    };

    return (
        <div className = "nanvar__main">
            <div className ="trending__movies" onClick = {ScrollHandler}>
                Trending
            </div>
            <div className = "top__rated__movies" onClick = {ScrollHandler}>
                Top Rated
            </div>
            <div className = "action__movies" onClick = {ScrollHandler}>
                Action
            </div>
            <div className = "horror_movies" onClick = {ScrollHandler}>
                Horror
            </div>
            <div className = "comedy__movies" onClick = {ScrollHandler}>
                Comedy
            </div>
        </div>
    );
}

export default Navbar;