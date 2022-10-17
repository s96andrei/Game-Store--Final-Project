import React, { useEffect, useState } from "react";
import "./Home.css";
import Games from "../Games/Games";
import Pagination from "../Pagination/Pagination";


const Home = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        const response = await fetch(`https://api.rawg.io/api/games?key=a3c9cac9b0db4e1f97e8662adb34f2e8&page=1&page_size=40`);
        const data = await response.json();
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
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={games.length}
                    paginate={paginate}
                />
            </div>

        </div>
    )
}

export default Home;