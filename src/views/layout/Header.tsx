import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { Button } from "src/components/elements/Button";
import { DowIcon } from "src/Utils/Icons";
import UserImg from "../../assets/User.svg";
import { SocialMedia } from "../../components/socialMedia/SocialMedia";
import "./Header.css";
interface HeaderProps {}

export function Header({}: HeaderProps) {
  useEffect(() => {
    // Animation
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation should trigger every time the element scrolls into view
      mirror: false, // Animation should not mirror while scrolling past
    });
  }, []);

  const path = useLocation();

  return (
    <div data-aos="fade-down">
      {" "}
      {/* Applying AOS fade-down animation to the entire div */}
      <div className="icons_section d-flex align-items-end justify-content-end container-fluid iconnav gap-3 pb-3 pt-4">
        <SocialMedia />
      </div>
      <div className="">
        {["lg"].map(
          (
            expand // Map over an array to create a Navbar component
          ) => (
            <Navbar key={expand} expand={expand} className="pt-3">
              {" "}
              {/* Navbar with expand prop */}
              <Container fluid className="navbar">
                {" "}
                {/* Fluid container for Navbar */}
                <Navbar.Brand href="#">
                  {" "}
                  <Link to={"/"}>
                    <img className="logo" src="/Logo-svg.svg" alt="Logo" /> {/* Logo image */}
                  </Link>
                  {/* Logo image */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> {/* Toggle button for collapsing Navbar */}
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start bg"
                  className="d-none d-lg-block"
                >
                  {/* Offcanvas component for Navbar menu */}
                  <Offcanvas.Header closeButton>
                    {" "}
                    {/* Header with close button */}
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <Navbar.Brand href="#">
                        {" "}
                        <img className="logo" src="/Logo-svg.svg" alt="Logo" /> {/* Logo image */}
                        {/* <img className="logo" src={logo} alt="Logo" /> Logo image */}
                      </Navbar.Brand>
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    {" "}
                    <Nav className="justify-content-end align-items-lg-center font-mich flex-grow-1 gap-3">
                      {path?.pathname === "/fund" ? (
                        <ul className="flex items-center gap-4">
                          <li>
                            <Link className="gradient-text" to={"/"}>
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link className="gradient-text" to={"/"}>
                              Mission
                            </Link>
                          </li>
                          <li>
                            <Link className="gradient-text" to={"/"}>
                              JOBS
                            </Link>
                          </li>
                          <li>
                            <Link className="gradient-text flex items-center gap-1" to={"/"}>
                              You have 10
                              <DowIcon />
                            </Link>
                          </li>
                          <li>
                            <img src={UserImg} className="" alt="" />
                          </li>
                        </ul>
                      ) : (
                        <>
                          <a href="https://blog.open-source-economy.com/" className="gradient-text mr-8" target="_blank" rel="noopener noreferrer">
                            Blog
                          </a>
                          {/* <SecondaryButton title="WHITE PAPER" className="text-white" path="/white-paper" /> */}
                          <Button variant="SECONDARY" size="LARGE" asChild>
                            <Link to="/white-paper">
                              <span className="relative z-20">WHITE PAPE</span>
                            </Link>
                          </Button>
                        </>
                      )}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          )
        )}
      </div>
    </div>
  );
}
