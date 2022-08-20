import React, {useEffect, useState} from 'react'
import './startRating.css'

function StartRating({setStarRating}) {
    return (
        <div className='startRating-size'>
            <fieldset className="starability-coinFlip">
                <input type="radio" id="first-rate1" name="rating" value={1} onClick={(e) => setStarRating(e.target.value)}/>
                <label for="first-rate1" title="Terrible">1 star</label>
                <input type="radio" id="first-rate2" name="rating" value={2} onClick={(e) => setStarRating(e.target.value)}/>
                <label for="first-rate2" title="Not good">2 stars</label>
                <input type="radio" id="first-rate3" name="rating" value={3} onClick={(e) => setStarRating(e.target.value)}/>
                <label for="first-rate3" title="Average">3 stars</label>
                <input type="radio" id="first-rate4" name="rating" value={4} onClick={(e) => setStarRating(e.target.value)}/>
                <label for="first-rate4" title="Very good">4 stars</label>
                <input type="radio" id="first-rate5" name="rating" value={5} onClick={(e) => setStarRating(e.target.value)}/>
                <label for="first-rate5" title="Amazing">5 stars</label>
            </fieldset>
        </div>
    )
}

export default StartRating
