import React, {useEffect, useState} from 'react'
import './starComment.css'

function StarComment({res}) {

    for(let i=0; i<res;i++) {
        return (
            <div className='startRating-size'>
                <p className='starability-result' data-rating= {res}>
                    Rated: {res} stars
                </p>
            </div>
        )
    }
}

export default StarComment


