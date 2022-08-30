import React, { useEffect } from 'react';
import "./Experience.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"

const Experience = () => {

    useEffect(() => {
        AOS.init({
            offset: 300, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 500 // values from 0 to 3000, with step 50ms
        });
    }, []);

    return (
        <div className="main_div_exp" >
        <div className="main_div_e" >
            <div className="section_title" id="experience" >
                <h2>Experience</h2>
            </div>

            <div className="main_divsec" >



                <motion.div className="experience_1"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="350"
                    data-aos-offset="0"
                    data-aos-once="true"
        >
                    <div className="job_title">
                        <p> AMPL Infotech</p>
                    </div>

                    <div className="job_duties">
                        <ul>
                            <li>Developed and maintained code for in-house and client websites primarily utilizing
                            HTML, CSS, JavaScript, and jQuery
                            </li>
                            <li>Tested code in various browsers and mobile devices to ensure cross-browser
                            compatibility and responsiveness
                            </li>
                            <li>Collaborated closely with other developers and producers to meet deadlines for
                            clients
                            </li>
                        </ul>
                    </div>

                    <div className="techs_worked">
                        <p> HTML CSS JavaScript MySQL
                        </p>
                    </div>

                </motion.div>

                <motion.div className="experience_1"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    data-aos-offset="0"
                >
                    <div className="job_title">
                        <p>Cultural Infusion</p>
                    </div>

                    <div className="job_duties">
                        <ul>
                            <li>Worked with variety of languages such as Node, React, HTML, CSS
                            </li>
                            <li>Designed Front end for the company, mainly the login page, sign up page and dashboard for the company
                            </li>
                            <li>Worked in a team to design the schema for the backend and created a database using Node and Mongo
                            </li>                            
                           <li>Communicate and collaborate with other engineers and team-members</li>
                        </ul>
                    </div>

                    <div className="techs_worked">
                        <p> REACT NODE MONGO CSS
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
        </div>

    );
};

export default Experience;