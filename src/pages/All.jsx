import { Movies } from "../Components/Movies";
import React from "react"
import { useState, useEffect } from "react"
import {Preloader} from "../Layout/Preloader"


function All() {
    const [movs, setMovs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=7cb619f1&s=matrix').then((response) => response.json())
            .then((data) => {
                data.Search && setMovs(data.Search);
                setLoading(false)
            })
    }, []);


    return (
        <main className='container content'>
            {loading ? <Preloader /> : <Movies movs={movs} />}
        </main>
    );


}

export {All}