import React, { useEffect } from 'react';
import "./Work.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"
import { data } from './data'


const Work = (theme) => {
  useEffect(() => {
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500 // values from 0 to 3000, with step 50ms
    });
  }, []);
  console.log(theme.theme.dark)
  return (
    <div className="main_work_div">
      <div className="main-div">
      <div id="work" className="work_title"><h2>Work</h2></div>
        {data && data.map((item, key) =>
          <motion.div className="App3"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-once="true">
            <div className='info3'>
              <div id="work" className="work_title3"><h3>{item.title}</h3></div>
              <div className='work_desc3' style={{backgroundColor: theme.theme.color,
                                                  color:theme.theme.backgroundColor,
                                                  transition:"2s"}}>
                <p>{item.desc}</p>
                </div>
              <div className='work_tech3'><p>{item.tech}</p></div>
              <div className='work_link3'>
                <a className="a_active" href={item.link} target="_blank" rel="noreferrer">
                  <i class="fas fa-external-link-square-alt" ></i>
                </a></div>

            </div>
            <div className='image4'>
              <div><a href={item.link} target="_blank" rel="noreferrer"><img className="image4_img" src={item.img} alt="loading" /></a></div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Work;


