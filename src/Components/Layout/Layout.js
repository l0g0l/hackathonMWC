import React from 'react';
import Background from '../Background/Background'
// import Stopwatch from '../Stopwatch/Stopwatch';
import Header from '../Layout/Header/Header'


import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>
            <main>
                <div className="containerlayout">
                    <Background />
                    <Header />
                    {children}
                   
                </div>
            </main>

        </>
    )
}
export default Layout
