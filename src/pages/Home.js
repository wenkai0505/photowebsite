import React, { useState, useEffect } from 'react'
import Item from '../components/Item'
import Search from '../components/Search'

const Home = () => {



    const [input, setInput] = useState('')
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(2)

    const auth = '563492ad6f917000010000013353774982364af8a8efe6668b303825'
    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=page=1`
    const initUrl = 'https://api.pexels.com/v1/curated?per_page=16&page=page=1'


    const searchHandler = () => {
        setPage(2)
        fetch(searchURL, {
            method: "GET",
            headers: {
                Authorization: auth
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setPhotos(data.photos)
        }).catch((err) => {
            console.log(err)
        })
    }


    const iniHandler = () => {
        fetch(initUrl, {
            method: "GET",
            headers: {
                Authorization: auth
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setPhotos(data.photos)
        }).catch((err) => {
            console.log(err)
        })
    }


    const loadMoreHandler = () => {
        let marURL;
        if (input === '') {
            marURL = `https://api.pexels.com/v1/curated?per_page=16&page=${page}`
        } else {
            marURL = `https://api.pexels.com/v1/search?query=${input}&per_page=16&page=${page}`
        }


        fetch(marURL, {
            method: "GET",
            headers: {
                Authorization: auth
            }
        })
            .then(res => res.json())
            .then((data) => {
                setPhotos(photos.concat(data.photos))
            }).catch((err) => {
                console.log(err)
            })


        setPage(page + 1)
    }



    useEffect(() => {
        iniHandler()
    }, [])


    return (
        <>
            <Search searchHandler={searchHandler} setInput={setInput} />
            <div className='home'>
                {
                    photos && photos.map((item) => {
                        return <Item item={item} key={item.id} />
                    })
                }

            </div>
            <button className='more' onClick={loadMoreHandler}>  Load More  </button>
        </>
    )
}

export default Home
