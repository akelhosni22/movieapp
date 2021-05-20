import React from 'react'
import {Card,Button} from 'react-bootstrap'
const Moviecard = ({title,description,posterurl,rating}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterurl} />
        <Card.Body>
    <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
    <Button variant="primary">{rating}</Button>
    </Card.Body>
</Card>
        </div>
    )
}

export default Moviecard;


