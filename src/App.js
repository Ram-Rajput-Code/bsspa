


import './App.css';
import Body1 from './MyComponents/Body1.jsx';
import Body2 from './MyComponents/Body2.jsx';
import Body3Advantage from './MyComponents/Body3Advantage.jsx';
import Body4 from './MyComponents/Body4.jsx';
import Footer from './MyComponents/Footer.jsx';

import Nav from './MyComponents/Nav.jsx';
import NavOne from './MyComponents/NavOne.jsx';
// import NavThree from './MyComponents/NavThree.jsx';
import Slider from './MyComponents/Slider.jsx';
import About from './MyComponents/About.jsx';
import Home from './MyComponents/Home.jsx';
import Contact from './MyComponents/Contact.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from './MyComponents/Gallery.jsx';
import Admission from './MyComponents/Admission.jsx';
import Activities from './MyComponents/Activities.jsx';
import Facilities from './MyComponents/Facilities.jsx';
import Test from './MyComponents/Test.jsx';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Slider />
          <Body1 />
          <Body2 />
          <Body3Advantage />
          <Body4 />
          <Footer />
          <Home />
        </>
    },
    {

      path: '/about',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <About />
          <Footer />
        </>
    },
    {
      path: '/contact',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Contact />
          <Footer />
        </>
    },
    {
      path: '/gallery',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Gallery />
          <Footer />
        </>
    },
    {
      path: '/admission',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Admission />
          <Footer />
        </>
    },
    {
      path: '/activities',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Activities />
          <Footer />
        </>
    },
    {
      path: '/facilities',
      element:
        <>
          <NavOne />
          <Nav />
          {/* <NavThree /> */}
          <Facilities />
          <Footer />
        </>
    },

    {
      path: '/test',
      element:
        <>
          <Test />
        </>
    }


  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;



