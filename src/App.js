import "./App.css";
import Footer from "./MyComponents/Footer.jsx";

import Contact from "./MyComponents/Contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./MyComponents/Gallery.jsx";
import Admission from "./MyComponents/Admission.jsx";
import Activities from "./MyComponents/Activities.jsx";
import Test from "./MyComponents/Test.jsx";
import HomePage from "./MyComponents/homePage/HomePage.jsx";
import NavBar from "./MyComponents/navBar/NavBar.jsx";
import AboutPage from "./MyComponents/aboutPage/AboutPage.jsx";
import FacilitiesPage from "./MyComponents/facilitiesPage/FacilitiesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <AboutPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <NavBar />
        <Gallery />
        <Footer />
      </>
    ),
  },
  {
    path: "/admission",
    element: (
      <>
        <NavBar />
        <Admission />
        <Footer />
      </>
    ),
  },
  {
    path: "/activities",
    element: (
      <>
        <NavBar />
        <Activities />
        <Footer />
      </>
    ),
  },
  {
    path: "/facilities",
    element: (
      <>
       
        <FacilitiesPage />
        
      </>
    ),
  },

  {
    path: "/facilities/faculties",
    element: <FacilitiesPage />,
  },
  {
    path: "/facilities/infrastructure",
    element: <FacilitiesPage />,
  },
  {
    path: "/facilities/praxis",
    element: <FacilitiesPage />,
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
