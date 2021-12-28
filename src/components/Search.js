import React, { useState, useEffect } from 'react'

const Search = ({ searchHandler, setInput }) => {



    const [banner, setBanner] = useState()

    const bannerHandler = () => {
        fetch('https://api.pexels.com/v1/curated?per_page=1&page=10', {
            method: "GET",
            headers: {
                Authorization: '563492ad6f917000010000013353774982364af8a8efe6668b303825'
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setBanner(data.photos)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        bannerHandler()
    }, [])


    const inputHandler = (e) => {
        setInput(e.target.value)
    }




    return (
        <div className='search'>
            {
                banner && banner.map((item, index) => {
                    return <img src={item.src.large2x} alt="" key={index} />
                })
            }
            <h1>FREE IMAGES</h1>
            <p>THE WEBSITE DESIGN WITH REACT & PEXELS API</p>
            <div className="searchBar">
                <input onChange={inputHandler} type="text" />
                <button onClick={searchHandler} className='btn'>SEARCH</button>
            </div>

        </div >
    )
}

export default Search
