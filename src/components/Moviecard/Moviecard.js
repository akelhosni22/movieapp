import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const Moviecard = ({title,description,posterurl,rating}) => {
    return (
        <div>
            <Card style={{ width: '18rem' , height :'45rem' , borderRadius:'30px',backgroundColor:'transparent', color:'white',border:'0px'}}>

        <Card.Img variant="top" src={posterurl} style={{width:'18 rem',height:'25rem'  ,borderRadius:'30px'}} />
        
        <Card.Body style={{ overflow:'auto'}}>

        <Card.Title>{title}</Card.Title>

        <Card.Text >{description}</Card.Text>
        <ReactStars count={5} onChange={rating} size={24} activeColor="#ffd700" value={rating} edit={false} />

        </Card.Body>

            </Card>
        </div>
    )
}

export default Moviecard;


