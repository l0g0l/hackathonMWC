import React from 'react';
import Background from '../Background/Background'

import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>


            <main>
                <div className="container">
                    <Background />

                    {children}
                </div>


            </main>

        </>
    )
}

export default Layout
