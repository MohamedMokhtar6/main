import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddTutorial from '../../Components/Admin/AddTutorial'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import Navs from '../../Components/NavBar/Navs'
function AdminCreateTutorialPage() {
    return (
        <>
            <Navs />
            <Row className='m-0'>
                <Col xs='4' sm='3'>
                    <AdminSidBar />
                </Col>
                <Col xs='8' sm='9'>
                    <AddTutorial />
                </Col>
            </Row>
        </>
    )
}

export default AdminCreateTutorialPage