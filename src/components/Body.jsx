import React from 'react';
import '../styles/body.css';
import side from '../assets/side.png';
import { color } from '@chakra-ui/react';
const Body = () => {
  return (
    <div className="charity-website">
  

      {/* MAIN */}
      <div className="main">
        <div className="main_content">
          <h2 >Funding to students is not just an investment in their education; it's an investment in a brighter future for all.<br /><span>Empowering students through funding paves the path to endless possibilities.</span></h2>
          <div className="btn">
            <a href="/donate">DONATE NOW</a>
          </div>
        </div>
      </div>

      {/* SIDE */}
      <div className="side">
        <div className="left">
          <img src={side} alt="Side Image" />
        </div>
        <div className="right">
          <h2>HELP A CHILD TODAY</h2>
          <p>
            Service to man is service to God. Charity Jet cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.
          </p>
          <div className="side_btn">
            <a href="/donate">JOIN US TODAY</a>
          </div>
        </div>
      </div>



      {/* FOOTER */}
      <footer>
    
        <div className="doc">
          <h3>Navigation</h3>
          <a href="/">Home</a>
          <a href="/donate">Donate</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <a href="contact" target="_blank" rel="noopener noreferrer">United States</a>
          <a href="tel: +1 000 000 0000">200-000-0000</a>
          <a href="mailto: ppppppp@gmail.com">Little@gmail.com</a>
        </div>
        <div className="social">
          <h3>Support</h3>
          <p>Help us shape a better future for children all over the world</p>
          <div className="side_btn">
            <a href="/donate">JOIN US TODAY</a>
          </div>
        </div>
        </footer>
    </div>
  );
};

export default Body;
