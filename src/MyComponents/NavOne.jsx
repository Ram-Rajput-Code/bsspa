
import './navone.css';
import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavOne() {
    return (

        <div class="main" style={{ padding: '5px' }}>
            <div class="email">
                <MdOutlineMail /> bsspranavanandaacademy10@gmail.com</div>

            {/* <div class="socialMediaIcon">
                <div><FaFacebookSquare color='white' /></div>
                <div><FaTwitter color='white' /></div>
                <div><TfiYoutube color='white' /></div>
                <div><IoLogoInstagram color='white' /></div>
                <div><FaLinkedinIn color='white' /></div>
            </div> */}
            <div className='contact'>
                <div>
                    <Link className="nav-link active" aria-current="page" to="/gallery" style={{ color: 'white' }}>
                        Gallery
                    </Link>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <Link className="nav-link active" aria-current="page" to="/contact" style={{ color: 'white' }}>
                        Contact Us
                    </Link>
                </div>
            </div>




        </div>

    )
}
