import React from 'react'
import Moviecard from '../Moviecard/Moviecard'

const Movielist = ({movies,search}) => {
    return (
        <div>
            {movies.filter(el=>el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el,i)=><Moviecard title={el.title} description={el.description} posterurl={el.posterurl} key={i}/>)}
        </div>
    )
}

export default Movielist
