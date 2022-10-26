import React, { useEffect, useState } from "react";
import "./Home.css";
import Games from "../Games/Games";
import Pagination from "../Pagination/Pagination";
import HomeCarousel from "../Carousel/HomeCarousel";


const Home = () => {

    const [games, setGames] = useState([]);
    // const [prices, setPrices] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        getGames();
    }, [currentPage]);

    const getGames = async () => {
        const response = await fetch(`https://api.rawg.io/api/games?key=a3c9cac9b0db4e1f97e8662adb34f2e8&page=${currentPage}&page_size=12`);
        const data = await response.json();

        // const responsePrices = await fetch(``);
        // const dataPrices = await responsePrices.json();
        // console.log(dataPrices);
        // // const test = data.results;
        // // for (let t of test) {
        // //     t.price = ...;
        // // }
        // setPrices();
        setGames(data.results);
        console.log(data.results);
    }


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <div className="mt-5 p-1">
                <HomeCarousel />
            </div>
            <div className="displayed-games">
                {games.map(results => (
                    <Games
                        key={results.slug}
                        title={results.name}
                        image={results.background_image}
                        rating={results.rating}
                        games={currentPosts}
                    />
                ))};
            </div>
            <div className="d-flex justify-content-center">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={games.length + 1}
                    paginate={paginate}
                />
            </div>

        </div>
    )
}

export default Home;