import React from 'react'
import { Row } from 'react-bootstrap'
import UserCard from './UserCard'

function AdminAllUser() {
    return (
        <>
            <Row className='m-0'>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </Row>
        </>
    )
}

export default AdminAllUser