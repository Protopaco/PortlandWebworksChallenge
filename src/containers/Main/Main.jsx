import React from 'react';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Body from "../../components/Body/Body"


export default function Main() {
    return (
        <div style={{ height: "100vh", backgroundColor: "green" }}>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}