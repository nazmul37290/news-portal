import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [category, setCategory] = useState("entertainment");
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = Math.ceil(articles.length / 20);
  const pages = [...Array(pageNumber).keys()];

  //   url for fetching data from api
  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=fd1b00cb70d8487d8481479c3ff52df0`;

  //   fetching data using axios
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [category]);
  console.log(pages);

  //   function for previous page button in pagination
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //   function for next page button in pagination

  const handleNextPage = () => {
    if (currentPage < pageNumber) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  };

  //   calculation of first item and last item of page according to page number
  const indexOfLastItem = currentPage * 20;
  const indexOfFirstItem = indexOfLastItem - 20;
  //   slicing fetched data according to page
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  //   function for searching
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedText = e.target.search.value;
    setCategory(searchedText);
  };
  return (
    <div>
      {/* heading */}
      <h3 className="font-bold text-xl text-center mt-5">News</h3>
      {/* functionalities container*/}
      <div className="flex justify-between">
        {/* filter functionality */}
        <div>
          <label htmlFor="category" className="font-medium">
            Filter by:
          </label>
          {/* dropdown for selecting filter */}
          <select
            name="category"
            className="p-2 border m-2"
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            id=""
          >
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* search functionality */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="border p-2 mr-2 rounded-md"
            id=""
            placeholder="search here"
          />
          <input
            type="submit"
            className="btn btn-sm bg-blue-900 text-white"
            value="search"
          />
        </form>
      </div>
      {/* display fetched data */}
      <div>
        {loading ? (
          <div className="text-center">
            <span className="loading loading-bars mx-auto loading-lg"></span>
          </div>
        ) : error ? (
          <p className="text-red-700 text-center my-4">{error}</p>
        ) : (
          // map current items for showing all items
          currentItems.map((article, i) => {
            return (
              <Link key={i} to="/articleDetails" state={article}>
                <div className="flex flex-col md:flex-row gap-5 bg-base-100 shadow-md my-4">
                  <div className="w-full md:w-1/3 h-[200px] ">
                    <img
                      className=" w-full h-full "
                      src={article?.urlToImage}
                      alt="news"
                    />
                  </div>
                  <div className="card-body w-full p-2 md:p-5 md:w-2/3">
                    <h2 className="card-title">{article?.title}</h2>
                    <p>{article?.description}</p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
      {/* pagination section */}
      <div className="flex justify-center">
        <div className="join">
          {/* previous button */}
          <button
            onClick={handlePrevPage}
            className="join-item btn btn-sm mr-1 "
          >
            Prev
          </button>
          {/* number of pages */}
          {pages?.map((page, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(page + 1)}
              className={`join-item btn btn-sm mr-1 ${
                currentPage === page + 1 && "bg-blue-800 text-white"
              } `}
            >
              {page + 1}
            </button>
          ))}
          {/* next button */}
          <button
            onClick={handleNextPage}
            className="join-item btn btn-sm mr-1 "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
