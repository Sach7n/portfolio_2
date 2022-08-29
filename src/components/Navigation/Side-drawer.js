import React from 'react';
import "./Side-drawer.css"
import { Link } from "react-scroll";
import pdf from "../ResumeF.pdf"

const Sidedrawer = props => {

    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (

        <nav className={drawerClasses} >
            <div className="sidedrawer_items" >
                <ul>
                    <li>
                        <Link
                            onClick={props.click}
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
                            onClick={props.click}
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
                            onClick={props.click}
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
                            onClick={props.click}
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={700}>
                            Experience
                            </Link>
                    </li>
                    <li onClick={props.click}>
                    <a href={pdf} target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Sidedrawer;

