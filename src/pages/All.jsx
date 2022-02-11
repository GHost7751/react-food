import { Movies } from "../Components/Movies";
import React from "react"
import { useState, useEffect } from "react"
import {Preloader} from "../Layout/Preloader"



function All(props) {
    const [movs, setMovs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search , setSearch] = useState('');
    const [type , setType] = useState('All');

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=7cb619f1&s=matrix').then((response) => response.json())
            .then((data) => {
                data.Search && setMovs(data.Search);
                setLoading(false)
            })
    }, []);

    const searchMovies =  (str, type = 'all' ) => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=7cb619f1&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>{
                setMovs(data.Search);
                setLoading(false)
                })
            
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
            
        }
        const handleKey = (event) => {
            if (event.key === 'Enter') {
                searchMovies(search, type);
            }
        };


    return (
        <main className='container content'>
            <div className='row'>
                <div className='input-field'>
                <input
                        className='validate'
                        placeholder='search'
                        type='search'
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            searchMovies(
                                search,
                                type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                </div>
            {loading ? <Preloader /> : <Movies movs={movs} />}
        </main>
    );


}

export {All}