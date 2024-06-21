import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [category, setCategory] = useState("entertainment")
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumber = Math.ceil(articles.length / 20);
    const pages = [...Array(pageNumber).keys()]
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=fd1b00cb70d8487d8481479c3ff52df0`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setArticles(res.data.articles)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [category])
    console.log(pages)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pageNumber) {
            setCurrentPage(currentPage + 1)
            console.log(currentPage)
        }
    }

    const indexOfLastItem = currentPage * 20;
    const indexOfFirstItem = indexOfLastItem - 20;
    const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            {

            }
            <h3 className='font-bold text-xl text-center mt-5'>News</h3>
            <label htmlFor="category" className='font-medium'>Filter by:</label>
            <select name="category" className='p-2 border m-2' onChange={(e) => {
                setCategory(e.target.value)
                setCurrentPage(1)
            }} id="">
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>

            </select>
            <div>
                {loading ? <div className='text-center'><span className="loading loading-bars mx-auto loading-lg"></span></div> :
                    error ? <p className='text-red-700 text-center my-4'>{error}</p> :
                        currentItems.map(article => {
                            return <Link to="/articleDetails" state={article}><div className="flex gap-5 bg-base-100 shadow-md my-4">
                                <div className=' w-1/3 h-[200px] '>
                                    <img className=' w-full h-full ' src={article?.urlToImage} alt="news" />
                                </div>
                                <div className="card-body w-2/3">
                                    <h2 className="card-title">{article?.title}</h2>
                                    <p>{article?.description}</p>

                                </div>
                            </div></Link>
                        })
                }

            </div>
            <div className='flex justify-center'>

                <div className="join">
                    <button onClick={handlePrevPage} className="join-item btn btn-sm mr-1 ">Prev</button>
                    {
                        pages?.map(page => <button onClick={() => setCurrentPage(page + 1)} className={`join-item btn btn-sm mr-1 ${currentPage === page + 1 && "bg-blue-800 text-white"} `}>{page + 1}</button>)
                    }
                    <button onClick={handleNextPage} className="join-item btn btn-sm mr-1 ">Next</button>


                </div>
            </div>
        </div>
    );
};

export default Home;