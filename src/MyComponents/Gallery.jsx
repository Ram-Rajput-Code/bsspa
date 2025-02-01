import React from 'react'
import GalleryImages from './galleryPage/galleryComponents/GallaryImages';

const Gallery = () => {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-12" style={{
          height: '400px',
          backgroundImage: 'url(/images/our-praxis-banner.jpg)',
          border: '1px solid black',
          borderImage: 'linear-gradient(to right, red, blue, green, purple) 1',
          textAlign: 'center',
          paddingTop: '5px',
        }
        }>
          <h3 style={{ color: 'white', padding: '0' }}>Our Gallery</h3>
        </div>
      </div>

      <div class="row" style={{ paddingTop: '20px', paddingRight: '0px' }}>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="/images/gallery1.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery1.jpg"
          />

          <img
            src="/images/gallery22.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery22.jpg"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/gallery3.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery3.jpg"
          />

          <img
            src="/images/gallery4.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery4.jpgr"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/gallery5.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery5.jpg"
          />

          <img
            src="/images/gallery66.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="/images/gallery66.jpg"
          />
        </div>
      </div>
      <GalleryImages/>
    </div>


  );
}

export default Gallery
