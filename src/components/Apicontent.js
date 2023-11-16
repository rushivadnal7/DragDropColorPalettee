import React from 'react'
import './util.css'
import './Apicontent.css'

const Apicontent = (props) => {
    return (
        <div className='api__section container'>
            {props.children}
        </div>
    )
}

export default Apicontent