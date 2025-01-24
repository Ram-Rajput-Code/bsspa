import React, { useState } from 'react';
import './facilities.css';
const Facilities = () => {

  const [isHovered, setIsHovered] = useState(false);



  const box1 = {
    height: '100px',
    width: '100%',
    backgroundColor: 'transparent',
    position: 'fixed',
    top: '125px',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0px 0px 40px 0px rgba(4, 3, 80, 0.7)',

    backgroundColor: isHovered ? 'rgb(222, 217, 217)' : 'rgba(24, 19, 189, 0.53)',
    color: isHovered ? 'orange' : 'white',
    transition: 'background-color 0.3s ease, transform 0.3s ease',


  };





  return (
    <>
      {/* <div className="box1" style={box1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <h3 style={{ textAlign: 'center' }}>
          Text
        </h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut dicta beatae optio, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque id porro recusandae architecto quis voluptate sint debitis odio laudantium earum repellendus ratione nisi dolorum vitae, magnam nihil sit! Voluptas, nisi!</p>
      </div > */}
      <div className="container-fluid" style={{ padding: '0px' }}>
        <div className="row">
          <div className="col-12">
            <img src="/images/class-room-banner.jpg" alt="" style={{ padding: '0px', width: '100%' }} />
          </div></div>
        <div className="facilitiesrow1">
          <div className="col img1" ><img src="/images/infrastructure_4.jpg" alt="" /> </div>
          <div className="col text"  >
            <h3>Transport</h3>
          With our focus on safety, reliability, and convenience, our bus service eliminates the stress of daily commuting for both parents and students. By choosing our school bus service, you ensure that your child travels in a secure and supervised environment, fostering peace of mind for parents and a comfortable journey for students. Our well-structured transport system not only saves time but also promotes punctuality and discipline in students’ daily routines.
             </div>

             <div className="col img1" ><img src="/images/libraryImage.jpg" alt="" /> </div>
          <div className="col text"  >
            <h3>Library</h3>
          The Library at BSS Public Academy (BSSPA) is the heart of our academic and cultural ecosystem, designed to ignite a passion for reading, foster curiosity, and support lifelong learning. With a diverse collection of resources and a serene atmosphere, our library serves as a hub for intellectual exploration and personal growth.
             </div>
          



          <div className="col img1" ><img src="/images/school-image.jpg" alt="" /> </div>
          <div className="col text"  >
            <h3>Infrastructure</h3>
          At BSSPA, our infrastructure is more than just buildings and facilities—it’s a platform for nurturing creativity, innovation, and excellence. By providing world-class amenities, we ensure that our students receive the best education and an environment that supports their growth in every dimension.
             </div>
          



          <div className="col img1" ><img src="/images/infrastructure_2.jpg" alt="" /> </div>
          <div className="col text"  >
            <h3>Labs</h3>
            <b>Science Labs : </b>(Physics, Chemistry, Biology): Designed for experiments and exploration to nurture curiosity and foster scientific thinking. <br />
<b>Computer Labs:</b> Equipped with advanced systems, high-speed internet, and the latest software to teach programming, coding, and other IT skills. <br />

             </div>
          
        </div>


      </div>
    </>
  )
}

export default Facilities
