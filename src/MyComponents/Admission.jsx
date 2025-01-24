import React from 'react';
import './admission.css';

const Admission = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row admissionrow1">
          <div className="admissionbox0">
            <h3 style={{ textAlign: 'left', marginTop: '20px' }}>  </h3>
          </div>
          <div className="admissionbox1" style={{ zIndex: '20', height: '300px', width: '400px', position: 'absolute', right: '10px', bottom: '10px' }}>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'rgb(43, 43, 46)', color: 'white', margin: '5px', padding: '5px' }}> <span>Office Timing : 9.00 am to 3.00 pm</span> </div>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'hsl(35, 96.00%, 49.00%)', color: 'black', margin: '5px', padding: '5px' }}> Admission Enclosure : </div>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'rgb(43, 43, 46)', color: 'white', margin: '5px', padding: '5px' }}> 1- Birth Certificate  (Nursery to Class I) </div>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'rgb(43, 43, 46)', color: 'white', margin: '5px', padding: '5px' }}> 2- Marksheet (Prv Class), TC (Class II Onwards) </div>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'rgb(43, 43, 46)', color: 'white', margin: '5px', padding: '5px' }}> 3- Four Recent Passport Photograph (All Classes) </div>
            <div className="row" style={{ borderRadius: '5px', backgroundColor: 'hsl(35, 96.00%, 49.00%)', color: 'black', margin: '5px', padding: '5px' }}> Text </div>
          </div>
          <div className="col-12" style={{ opacity: '0.4', marginBottom: '20px', height: '400px', border: '2px solid blue', padding: '1px', borderRadius: '7px' }}>
            <img src="/images/toppers-banner.jpg" alt="toppers-banner" height={'100%'} width={'100%'} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Admission
