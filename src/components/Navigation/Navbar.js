import React from 'react';
import "./Navbar1.css"
import { Link } from "react-scroll";
import pdf from "../ResumeF.pdf"
import logo from "./logo.png"

const Navbar1 = props => {
    return (
        <nav className="main-nav">

            <div className="nav-logo"><img className="logo_svg" src={logo} alt="logo"/></div>

            <div />

            <div className="nav-items">
                    <li>
                        <Link
                            activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Home
                            </Link>
                    </li>

                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About
                            </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Work
                            </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}>
                            Experience
                            </Link>
                    </li>
                    <li>
                    <a href={pdf} target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
                    </li>
                
            </div>


        </nav>
    );
};

export default Navbar1;