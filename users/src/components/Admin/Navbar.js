import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import logo from './ImagesAdmin/Logo.png';
import cb from './ImagesAdmin/cb.png';
import admin from './ImagesAdmin/admin.png';

export default function Navbar(){

const [open, setOpen] = useState(false);
    return (
    <nav class="navbar bg-light out-nav">
        <div class="container-fluid">
            <img src={logo} className="logo" alt=""/>
            <img src={cb} className="cb" alt=""/>
            <div className='menu-containered'>
                <div className='menu-triggered' onClick={()=>{setOpen(!open)}}>
                    <span className="Adname"> Admin Name</span>
                    <img src={admin} className="admin" alt=""/>
                </div>
                <div className={`dropdown-menues ${open? 'active':'inactive'}`}>
                    <h6> Celestial </h6>
                    <ul>
                        <DropdownItem text = {"Log Out"} />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}