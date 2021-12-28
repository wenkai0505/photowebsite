import React from 'react'

const Item = ({ item }) => {
    const { src: { large, large2x }, photographer, photographer_url } = item
    return (
        <div className='item'>
            <div className="info">
                <div className="bottom">
                    <a href={photographer_url} target="_blank">{photographer}</a>
                    <a href={large2x} target="_blank">Download</a>
                </div>
            </div>
            <img src={large} alt="" />
        </div>
    )
}

export default Item
