import React, { useEffect, useState } from "react";
import "./Home.css";
import Game from "../Games/Game";
import PaginationList from "../Pagination/PaginationList";
import HomeCarousel from "../Carousel/HomeCarousel";
import { useDispatch, connect } from "react-redux";
import { setGamesStore, setPricesStore } from "../../store/actions";

const Home = (props) => {

    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        getGames();
        getPrices();
    }, [currentPage]);

    const getGames = async () => {
        const response = await fetch(`https://api.rawg.io/api/games?key=a3c9cac9b0db4e1f97e8662adb34f2e8&page=${currentPage}&page_size=12`);
        const data = await response.json();
        console.log(data);
        dispatch(setGamesStore(data.results));
    }

    const getPrices = async () => {
        const responsePrices = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const dataPrices = await responsePrices.json();
        console.log(dataPrices);

        dispatch(setPricesStore(dataPrices));
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.games.slice(indexOfFirstPost, indexOfLastPost)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <div className="mt-5 p-1">
                <HomeCarousel />
            </div>
            <div className="displayed-games">
                {props.games.map((game, index) => (
                    <Game
                        key={game.slug}
                        title={game.name}
                        image={game.background_image}
                        rating={game.rating}
                        price={props.prices[index]?.price}
                        games={currentPosts}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <PaginationList
                    postsPerPage={currentPosts}
                    totalPosts={props.games.length + 1}
                    paginate={paginate}
                />
            </div>

        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        games: state.games,
        prices: state.prices
    };
};

export default connect(mapStateToProps)(Home);