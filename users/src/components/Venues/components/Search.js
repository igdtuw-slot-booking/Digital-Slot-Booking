import React, { useEffect, useState } from 'react'
import Venuedata from './VenueData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Set from './Set'
import Nav from '../../Navbar/Navbar.js';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Search = () => {

    const [fdata, setFdata] = useState(Venuedata);
    const [copydata, setCopyData] = useState([]);

    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Venuedata);
        }, 3000);

    }, [])

    return (
        <>

         <Nav />
      
  
            <MDBRow sm="9" > 
            <div className="navbar_backspace d-flex justify-content-between align-items-center">
            </div>
            </MDBRow> 


            <MDBRow>
                <div className="stepper-wrapper">
                    <div className="stepper-item completed">
                        <div className="step-counter">1</div>
                        <div className="step-name progress_label">Select Venue</div>
                    </div>
                    <div class="stepper-item active">
                        <div class="step-counter">2</div>
                        <div class="step-name">Slot Booking</div>
                    </div>
                </div>


            </MDBRow>

            <MDBRow>
                <MDBCol md='8'>
                    <Form className='d-flex justify-content-center align-items-center mt-3 venue'>
                        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                            <Form.Control type="text"
                                onChange={(e) => chanegData(e.target.value)}
                                placeholder="Search Venue" />
                        </Form.Group>
                        <Button as="input" type="button" value="Search" variant='search_button' />
                    </Form>
                </MDBCol>
                <MDBCol md='4'>
                    <Button as="input" type="button" value="Filter" variant='filter_button mt-3' />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <div className="Progres_Bar">

                </div>

            </MDBRow>


            <MDBRow>
                <MDBCol md='2' className="side_nav d-flex align-items-center">
                    <Card style={{ width: '10rem', height: '10rem', border: "none" }} className=" d-flex justify-content-space-evenly align-content-center">
                        <Card.Body className='d-flexflex-direction-column align-items-center'>
                            <Card.Text >
                                <Button as="input" type="button" value="Dashboard" variant='side_button' />
                            </Card.Text>
                            <Card.Text>
                                <Button as="input" type="button" value="Book Venue" variant='side_button' />
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </MDBCol>
                <MDBCol md='10'>
                    <section className='iteam_section mt-4 container'>


                        <div className="row mt-2 d-flex justify-content-around align-items-center">
                            {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata} />}
                        </div>
                    </section>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default Search