import "./App.css";
import Footer from "./MyComponents/Footer.jsx";

import Nav from "./MyComponents/Nav.jsx";
import NavOne from "./MyComponents/NavOne.jsx";
// import NavThree from './MyComponents/NavThree.jsx';

import About from "./MyComponents/About.jsx";

import Contact from "./MyComponents/Contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./MyComponents/Gallery.jsx";
import Admission from "./MyComponents/Admission.jsx";
import Activities from "./MyComponents/Activities.jsx";
import Facilities from "./MyComponents/Facilities.jsx";
import Test from "./MyComponents/Test.jsx";
import HomePage from "./MyComponents/homePage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavOne />
        <Nav />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <Gallery />
        <Footer />
      </>
    ),
  },
  {
    path: "/admission",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <Admission />
        <Footer />
      </>
    ),
  },
  {
    path: "/activities",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <Activities />
        <Footer />
      </>
    ),
  },
  {
    path: "/facilities",
    element: (
      <>
        <NavOne />
        <Nav />
        {/* <NavThree /> */}
        <Facilities />
        <Footer />
      </>
    ),
  },

  {
    path: "/test",
    element: (
      <>
        <Test />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
