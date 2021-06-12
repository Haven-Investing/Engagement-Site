import React from 'react'

import iPhone from '../../Assets/iPhone.png'

import '../../App.css'

const Content1 = () => {
    return (
        <div className="ContentContainer">
            <img className="ImageLeft" src={iPhone}/>
            <div className="ContentTitleMain">
                <h1 className="ContentTextMain">The 
                <span style={{color:"#6B95B3"}}> Future </span> 
                of Stock Education is Here. </h1>
            </div>
        </div>
    )
}

export default Content1
