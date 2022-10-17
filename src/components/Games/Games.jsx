import React from 'react'
import "./Games.css";

const Games = ({ title, image, rating }) => {
    //Prices for games
    const gamePrice = Math.trunc(Math.random() * 100)

    return (
        <div className='container'>
            <div className='games'>
                <h1 >{title}</h1>
                <img className='images' src={image} alt="" />
                <p>Rating: {rating}</p>
                <p> Price: {gamePrice} $</p>
                <button className='button'>Buy Now</button>

            </div>
        </div>

    )
}

export default Games;