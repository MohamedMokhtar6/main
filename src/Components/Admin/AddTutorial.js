import React from 'react'
import { Button, Row } from 'react-bootstrap'
import up from '../../Images/up.png'

function AddTutorial() {
    return (
        <>
            <Row className="m-3 flex-column ">
                <div className=" fw-bold fs-4 my-3">Add New Tutorial</div>
                <span>Jupiter File</span>

                <input
                    type={"file"}
                    id="upload"
                    className=" fit "


                />
                <input
                    placeholder="Tutorial Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="Tutorial Duration"
                    type={"number"}
                    className="fit reduce my-2"
                />
                <textarea placeholder='htmlContent' rows={'10'} style={{ resize: 'none', width: '50%' }} />
                <select className='my-2 reduce fit ' >
                    <option value={'0'}>isActive?</option>
                    <option value={'1'}>Yes</option>
                    <option value={'2'}>No</option>

                </select>
                <Button variant="dark" className="fit m-3" >
                    Save
                </Button>

            </Row>

        </>
    )
}

export default AddTutorial