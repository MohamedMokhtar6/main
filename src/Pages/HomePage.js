import React from 'react'
import CourseContainer from '../Components/Courses/CourseContainer'
import Navs from '../Components/NavBar/Navs'
import Landing from '../Components/util/Landing'

function HomePage() {
    return (
        <>
            <Navs />
            <Landing />
            <CourseContainer />
        </>
    )
}

export default HomePage