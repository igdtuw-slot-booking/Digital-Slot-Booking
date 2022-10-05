import React from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pending from './Pending';
import Approved from './Approved';
import Declined from './Declined';
import Inbar from './Inbar';
import Navbar from './Navbar';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function Admin() {
    let component
    switch (window.location.pathname){
        case "/Pending":
            component =<Pending />
            break
        case "/Approved":
            component =<Approved />
            break
        case "/Declined":
            component =<Declined />
            break
    }
    return(
        <>
            <Navbar />
            <div className='wh-body'>
                <h4 className='welcome'>Welcome Celestial !</h4>
                <div className="cont">
                    <Inbar />
                    {component}
                </div>
            </div>
        </>
    )
}