import React from 'react'
import Moviecard from '../Moviecard/Moviecard'
import './Movielist.css'

const Movielist = ({movies,search,ratingSearch}) => {
    return (
        <div className="movie">
            {movies.filter(el=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())&&el.rating>=ratingSearch).map((el,i)=><Moviecard title={el.title} description={el.description} posterurl={el.posterurl} key={i}/>)}
        </div>
    )
}

export default Movielist
