import React from 'react'
import "./Games.css";

const Game = ({ title, image, rating, price }) => {
    return (
        <div className='games'>
            <h4 className='title'>{title}</h4>
            <img className='images' src={image} alt="" />
            <p className='rating'>Rating: {rating}</p>
            <p className='price-text'> Price: {price} $</p>
            <button className='button'>Add to cart</button>
        </div>
    )
}

export default Game;