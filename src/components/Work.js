import React, { useEffect } from 'react';
import "./Work.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"
import p1 from "./2.PNG";
import p2 from "./3.png";
import p3 from "./4.png";


const Work = () => {
  useEffect(() => {
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500 // values from 0 to 3000, with step 50ms
    });
  }, []);
  return (
    <div className="main_work_div">
      <div className="main-div">
        <div id="work" className="work_title"><h2>Work</h2></div>

        <div className="App">
        <motion.article className="project_pro_1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-once="true"
          >

            <div className="info_class_r">
              <h3 className="title_r">Vallys Bliss</h3>
              <p className="desc_r">
                A freelance project for an event management company. The client is an event management company
                focused on providing event management services. They just needed a fancy show off website to attract 
                the customers.
                </p>
              <p className="techs_r">Reactjs , Pure CSS, Hooks</p>
              <div className="icons_r">
                <a className="a_active" href="https://vallysbliss.com/" target="_blank" rel="noreferrer">
                  <i class="fas fa-external-link-square-alt" ></i>
                </a>
              </div>
            </div>

            <motion.div className="image_r" whileHover={{ zIndex: 3 }} >
              <motion.img src={p3} alt="abc" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            </motion.div>

          </motion.article>
          <motion.article className="project_pro_1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="info_class_r" >
              <h3 className="title_r">Travel India</h3>
              <p className="desc_r">
                A simple web app to decide where to go on a trip.
                It gives information about different places to visit.
                The app is developed using Reactjs and tailwind CSS for designing.
                The state is managed using hooks. The photos are fetched using pixaby API.
                </p>
              <p className="techs_r">Reactjs (Context API), Tailwind CSS, Pixaby API</p>
              <div className="icons_r">
                <a className="a_active" href="https://travind.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-external-link-square-alt" ></i>
                </a>
              </div>
            </div>

            <motion.div className="image_r" whileHover={{ zIndex: 3 }} >
              <a className="a_active" href="https://travind.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.img src={p2} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
              </a>
            </motion.div>
          </motion.article>

          <motion.article className="project_pro_2"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-once="true"
          >

            <motion.div className="image" whileHover={{ zIndex: 3 }} >
              <a className="a_active" href="https://react-ecomm1.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.img src={p1} alt="abc" whileHover={{ scale: 1.02 }} transition={{ type: "tween" }} />
              </a>
            </motion.div>


            <div className="info_class">
              <h3 className="title">E Commerce store</h3>
              <p className="desc">
                A Basic E Commerce website with the functionalities like
                details of product, modal showing the basic info and the
                state (whether in cart or not and add to cart button and
                the component showing all the items added to in cart.
          </p>
              <p className="techs">Reactjs (Context API), Hooks</p>
              <div className="icons">
                <a className="a_active" href="https://react-ecomm1.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-external-link-square-alt" ></i>
                </a>
              </div>

            </div>
          </motion.article>


          
        </div >



      </div>
    </div>
  );
};

export default Work;


