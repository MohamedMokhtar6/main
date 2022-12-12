import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAddEvent from '../../Components/Admin/AdminAddEvent'
import AdminSidBar from '../../Components/Admin/AdminSidBar'
import Navs from '../../Components/NavBar/Navs'
function AdminCreateEventPage() {
    return (
        <>
            <Navs />
            <Row className='m-0 justify-content-center'>
                <Row className='justify-content-center'>
                    <AdminSidBar />
                </Row>
                <Row className='justify-content-center'>
                    <AdminAddEvent />
                </Row>
            </Row>
        </>
    )
}

export default AdminCreateEventPage