import React from 'react';
import './activities.css';

const Activities = () => {
  return (
    <>
      <div className="container-fluid">
        {/* row1 header image*/}
        <div className="row"><img src="/images/slider-one.jpg" alt="slider-one" /> </div>
        {/* row1 */}
        {/* row2 header text*/}
        <div className="row" > <h3 style={{ textAlign: 'center' }}>Activities</h3> </div>
        {/* row2 */}

        {/* row3 */}
        <div className="activitiesrow3">
          <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/gallery39.jpg" alt="" height={'250px'} width={'100%'} /> </div>
          < div className="activitiestext">
            <div className="row" style={{ padding: '20px' }}>
            We celebrate the rich cultural heritage of India by organizing engaging and creative activities for our students. One such cherished event is the Rakhi Making Competition, an exciting opportunity for students to showcase their artistic talent and creativity while learning about the significance of the <b style={{ display:'contents' }}>Raksha Bandhan festival</b>.
              </div>
            <button btn-primary style={{ marginLeft: '5px', height: '30px', width: '80px', borderRadius: '20px' }}>Click</button>
          </div>
        </div>
        {/* row3 */}
        {/* row4 */}
        <div className="activitiesrow3">
          <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/gallery14.jpg" alt="" height={'250px'} width={'100%'} /> </div>
          <div className="activitiestext">
            <div className="row" style={{ padding: '20px' }}>
            We believe that <b style={{ display:'contents' }}>sports</b> are an integral part of holistic education. Our sports program is designed to nurture physical fitness, teamwork, leadership, and discipline among students while providing them with opportunities to excel in their favorite games and activities.
             </div>
            <button btn-primary style={{ marginLeft: '5px', height: '30px', width: '80px', borderRadius: '20px' }}>Click</button>
          </div>
        </div>
        {/* row4 */}
        {/* row5 */}
        <div className="activitiesrow3">
          <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/infrastructure_one.jpg" alt="" height={'250px'} width={'100%'} /> </div>
          <div className="activitiestext">
            <div className="row" style={{ padding: '20px' }}>
            We believe in nurturing the holistic development of our students, and <b style={{ display:'contents' }}>yoga</b> plays an integral role in achieving that goal. Yoga is not just a form of physical exercise; it’s a way of life that promotes mental clarity, emotional balance, and spiritual well-being.
               </div>
            <button btn-primary style={{ marginLeft: '5px', height: '30px', width: '80px', borderRadius: '20px' }}>Click</button>
          </div>
        </div>
        {/* row5 */}


      </div >
    </>
  )
}

export default Activities
