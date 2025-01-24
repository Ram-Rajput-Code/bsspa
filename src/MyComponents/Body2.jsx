import React from 'react';
import './body2.css';
import { IoHappyOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";
import { Io5IconName } from 'react-icons/io5';



export default function Body2() {
  return (
    <div className=" body2main">
      {/* Inline styling with correct background image syntax */}

      <div className="box0" style={{
        padding: '0',
        backgroundImage: `url('/images/faculty-banner.jpg')`,
        backgroundSize: 'cover', // Optional: Cover entire area
        backgroundRepeat: 'no-repeat', // Optional: Prevent tiling
        backgroundPosition: 'center', // Optional: Center the image
        height: '400px', // Add height for the box
        width: '100%',

        opacity: '0.25',
        position: 'absolute',
        zIndex: '-1'

      }}>

      </div>

      <div className="bodybox">
        <div className="row-12"><h2>Ten Devine Messages</h2></div>

        <div className="aboutrow3">
          <div className="aboutcol1">What is Goal ?
            Self Realization, Univarsal Emancipation.</div>
          <div className="aboutcol1">What is Religion ?
            Self Sacrifice, Self discipline, Adherence to truth and Continence.</div>
          <div className="aboutcol1">What is the Real Death ?
            Forgetfulness or self.</div>
          <div className="aboutcol1">What is Real Life ?
            Self Realization, Self remembrance and Self consciousness.</div>
          <div className="aboutcol1">What is Real Virtues ?
            Heroism, Virlitity, manliness, Aspiration for Emancipation.</div>


          <div className="aboutcol1">What is Real Sins ?
            Weakness, Fear, Cowardice, Meanness, Selfishness.</div>
          <div className="aboutcol1">What are the Real Source of Strength ?
            Patience, Fortitude and Endurance.</div>
          <div className="aboutcol1">What is Real Assets ?
            Self Confidence, Self reliance and Self respect.</div>
          <div className="aboutcol1">What are real Enemies ?
            Indolence, Sulmber, Procrastination, Inertia, Lustful senses and Passion.</div>
          <div className="aboutcol1">What is Real Friends ?
            Energy, Enthusiasm and Perseverance.</div>

        </div>
      </div>
    </div>

  );
}
