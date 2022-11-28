import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../util/SubTitle'
import CourseCard from './CourseCard'

function CourseContainer() {
    return (
        <Container className='my-4 p-2 '>
            <SubTitle title='Courses' btnTitle="More" path={'/courses'} />
            <Row className='justify-content-evenly m-3'>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />


            </Row>
        </Container>
    )
}

export default CourseContainer