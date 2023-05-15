import React from 'react'
import "../uni.css"
import "./NavBar.css"
import { Routes,Route } from 'react-router-dom';

import Body from "./Body"
import Services from "./Services"
import Plans from "./Plans"
import OurMission from './OurMission';
import AboutUs from './AboutUs';
import Contact from './Contact';

import { Link } from 'react-router-dom';

const navItems=["Home","Services","Plans","Our Mission","About Us","Contact"];


function NavBar() {
  return (
    <>
        <nav className="NavBar">
            <ul className="Nav-Items flex-row-evenly">
                <li className="Main-Logo-Text">RSP</li>
                {
                    navItems.map(val=>
                        <NavItems val={val} />)
                }
            </ul>
        </nav>
        <Routes>
            <Route path="/*" element={<Body />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/Our Mission" element={<OurMission />} />
            <Route path="/About Us" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
  )
}

function NavItems(props)
{
    return (
        <Link to={`/${props.val}`} className="Nav-Item" >{props.val}</Link>
    )
}

export default NavBar