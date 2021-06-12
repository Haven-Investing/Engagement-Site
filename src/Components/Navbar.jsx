import React from 'react'

import '../App.css'

import { Button, Text } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Text className="NavbarTitle"> <span style={{color: "#6B95B3"}}>Haven</span> Investing</Text>
            <Button style={{margin:"20px", paddingRight: "28px", paddingLeft: "28px"}}>About Us</Button>
        </div>
    )
}

export default Navbar
