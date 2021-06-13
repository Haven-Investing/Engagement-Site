import React from 'react'

import iPhone from '../../Assets/iPhone.png'

import '../../App.css'

import { Button } from "@chakra-ui/react"

const Content1 = () => {
    return (
        <div className="ContentContainer" style={{marginBottom: "100px"}}>
            <img className="ImageLeft" src={iPhone}/>
            <div className="ContentContainerRight">
                <h1 className="ContentTextTitle"><span style={{color:"#6B95B3"}}>Advanced </span>
                Market simulator</h1>
                <h1 className="ContentTextPrimary">
                With our market simulator and learning platform, we also want to provide a more unique experience by adding an online aspect to learning. Even if you have all the right tools to help learn, motivation can sometimes be hard to find, and we understand that. To help people find motivation to continue, we added gave you a second portfolio that you will construct to compete with others for a place on the leaderboard. We also want to host a community where students can talk to others with similar interests and also ask questions. With these two aspects, we hope to make the stock market exciting and fun for you and your friends.
                </h1>
                <Button style={{width: "13%", marginTop: "50px"}}>Learn More</Button>
            </div>
        </div>
    )
}

export default Content1
