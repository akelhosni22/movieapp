import React from 'react'
import Moviecard from '../Moviecard/Moviecard'
import {Link} from 'react-router-dom'


const Movielist = ({movies,search,ratingSearch}) => {
    return (
        <div className="movie">
          {movies
            .filter(el=>el.title.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())&& el.rating>=ratingSearch)
            .map((newCard, i) => (
                <div key={i}>
                    <Link to={`/${newCard.title}`} className="see-trailer"><Moviecard newCard={newCard} /></Link> 
                </div>
        
        
    
            ))}
            </div>
        )}
       
            
export default Movielist
