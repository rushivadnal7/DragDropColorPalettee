import React from 'react'
import './Card.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Card = ({ name, imgUrl, population, LangVal, capitalCity }) => {
    { console.log(LangVal) }
    return (
        <>
            <div className='card-content'>
                <div className='card-front'>
                    {/* name - flag - population -  languages - captial*/}
                    <h2>{name}</h2>
                    <img className='card__image' src={imgUrl} />
                    <div>
                        <FontAwesomeIcon className='' icon={faUsers} />
                        <span>{population}</span>
                    </div>
                    <div className='card__languages'>

                        { Array.isArray(LangVal) ? LangVal.map((lang, index) => <span key={index}>{lang}</span>) : LangVal }

                    </div>
                    {/* <span>{capitalCity}</span> */}
                </div>
                <div className='card-back'>
                    {/* map - continent - currencies - area - borders */}
                </div>
            </div>
        </>
    )
}

export default Card