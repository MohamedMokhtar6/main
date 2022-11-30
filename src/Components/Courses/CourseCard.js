import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../Images/1.png'

function CourseCard() {
    return (
        <Col xs='6' sm='6' md='4' lg='3' className='d-flex fit click rot '>
            <Link to={`/course/:id`} style={{ textDecoration: "none", color: "black" }}>
                <Card style={{ border: "none" }} className='cardhov' >


                    <Card.Img variant="top" src={img} style={{ height: "150px", width: '220px' }} className="" />

                    <Card.Body className='p-0'>
                        <p className='text-center m-2'>Machine learning course</p>


                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default CourseCard