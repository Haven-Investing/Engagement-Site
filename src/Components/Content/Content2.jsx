import React from 'react'

import iPhone from '../../Assets/iPhone.png'

import '../../App.css'

import { Button } from "@chakra-ui/react"

const Content1 = () => {
    return (
        <div className="ContentContainer">
            <div className="ContentContainerLeft">
                <h1 className="ContentTextTitle"><span style={{color:"#6B95B3"}}>Interactive </span> Courses and Tutorials</h1>
                <h1 className="ContentTextPrimary">
                    Mindlessly watching videos or reading paragraphs of information can be boring, which is why we want to provide a more interactive way of learning. Interactive learning involves a combination of both questions or quizzes to test your knowledge on the topic and also small simulations to let you apply what you learned. For example, reading or listening to someone talking about how support and resistance lines work could help, but we also want to let you draw your own lines and try to use support and resistance lines for yourself in a real life setting. This might help you feel more prepared for when you are ready to use a market simulator.
                </h1>
                <Button style={{width: "13%", marginTop: "50px"}}>Learn More</Button>
            </div>
            <img className="ImageRight" src={iPhone}/>
        </div>
    )
}

export default Content1
