import React from 'react'
import './Main.css'
import './util.css'

import Navbar from './Navbar'

const Main = (props) => {
    return (
        <div className='main-section'>
            <Navbar />
            <div className='section-1 container'>
                <div className='section1__title'>
                    <h1 className='section1__h1'>Get The Country Knowledge <br /> You Want</h1>
                </div>
                <p className='section1__para'> <strong> There are approximately 195 recognized countries in the world </strong>, each with its unique characteristics and cultures. These nations range from vast superpowers like the United States and China to tiny island nations like Tuvalu. They contribute to the rich tapestry of global diversity, showcasing a wide spectrum of languages, traditions, landscapes, and histories. While it's impossible to provide an exhaustive overview in such a short paragraph, the world's countries collectively shape our planet's complex geopolitical landscape.</p>
            </div>
        </div>
    )
}

export default Main