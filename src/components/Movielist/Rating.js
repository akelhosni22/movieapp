import React from 'react'

const Rating = ({changeRating}) => {
  const handleChange = (e) => {
    changeRating(e.target.value)
  }
  return (
    <>
   <input onChange={handleChange}/>
    </>
  )
}
export default Rating
