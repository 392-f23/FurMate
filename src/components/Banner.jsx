import React from 'react'
import './Banner.css'

const Banner = ({banner, message}) => {
    <div className="topTitle">
        <h1>{banner}</h1>
        <div>{message}</div>
    </div>
}

export default Banner;