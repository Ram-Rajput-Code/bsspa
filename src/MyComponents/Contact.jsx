import React from 'react';
import './contact.css';

const Contact = () => {
  return (

    <>

      <div className='myclass' style={{ backgroundColor: 'whitesmoke'}}>
        <hr />

        <div className="row" style={{width:"100%"}}>
          <div className="col-12" style={{padding:"0"}}>
            <img src="/images/principal-message-banner.jpg" alt="" width={'100%'}  />
          </div>
        </div>
        <div class="row" style={{width:"100%"}}>

          <h1 align="center" class="ui-title-page" style={{padding:"0"}}>
            Contact Us
          </h1>
          <br />
          <br />




          <div class="col-12">
            <div class="section_map" style={{ border: '1px solid' }}>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.101183130066!2d81.72516341441958!3d21.188139087695216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c37a659e0e85%3A0x9471f51d1f031fe7!2sBSS+Pranavananda+Academy!5e0!3m2!1sen!2sin!4v1464244894150" width="100%" height="290" frameborder="0" ></iframe>
            </div>
          </div>
        </div>

        <hr />
        <section class="section_contacts-form">
          <div class="contactrow1">

            <div class="contactform">
              <h2>Send <strong>Us Message</strong></h2>

              <form class="row g-3 needs-validation" novalidate style={{ border: '1px solid blue', marginTop: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">First name</label>
                  <input type="text" class="form-control" id="validationCustom01" value="Enter your name" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Mobile</label>
                  <input type="text" class="form-control" id="validationCustom02" value="Enter mobile number" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                
                
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="col-12" style={{ marginBottom: '10px' }}>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
            <div className="contactaddress">
              <h2 style={{ padding: '5px' }}> <strong> Get in Touch with us</strong></h2>
              <a href="#" class="list-group-item list-group-item-action list-group-item-secondary" style={{ padding: '50px', borderRadius: '5px' }}>


                <b>LOCATION :</b> Bharat Sevashram Sangha Pranavananda Academy VIP Road Raipur. (C.G) <br /> <br />
                <b>PHONE :</b> 07712971219, 07712971220 <br /> <br />
                <b>EMAIL :</b> bsspranavanandaacademy10@gmail.com <br />
              </a>
            </div>




          </div>
        </section>

      </div>
    </>
  )
}

export default Contact
