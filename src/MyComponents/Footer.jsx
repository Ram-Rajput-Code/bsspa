import React from 'react';
import './footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="footermain">
      <div className="footerrow1">
        <div className="footerlogo">
          <img src="/images/logofooter.png" alt="/images/logofooter.png" />

        </div>
        <div className="footerlinks">
          <ul>
            <li><h4 style={{ color: 'white' }}> Links</h4></li>
            <li><span> > &emsp;</span><Link to="/about">About Us</Link></li>
            <li><span> > &emsp;</span><Link to="/admission">Admission</Link></li>
            <li><span> > &emsp;</span><Link to="/facilities">Facilities</Link></li>
            <li><span> > &emsp;</span><Link to="/activities">Activities</Link></li>
            <li><span> > &emsp;</span><Link to="/contact">Contact Us</Link></li>

          </ul>
        </div>
        <div className="footeraddress">
          <h4 style={{ color: 'white' }}>Our Office</h4>
          <p>Bharat Sevashram Sangha Pranavananda Academy<br />
            VIP Road  Raipur. (C.G).</p>
          bsspranavanandaacademy10@gmail.com
          <div className="footericon">
            <div className="col-1"><FaSquareFacebook /></div>
            <div className="col-1"><FaTwitter /></div>
            <div className="col-1"><FaPinterestP /></div>
            <div className="col-1"><FaInstagram /></div>
            <div className="col-1"><FaLinkedinIn /></div>
          </div>

        </div>
      </div>
      <hr />
      <div className="row" style={{ padding: '10px' }}>
        <div className="col-11">Copyrights © 2024 Bharat Sevashram Sangha Pranavananda Academy | All Rights Reserved.</div>

      </div>
    </div>
  )
}
