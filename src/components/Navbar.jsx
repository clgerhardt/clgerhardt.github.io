import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  mainBody,
  repos,
  about,
  skills,
  experiences,
  computerGraphics,
} from "../editable-stuff/config.js";
import { NavLink as CustomNavLink } from "./home/migration";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/"}
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <CustomNavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </CustomNavLink>
          } */}
          {about.show && (
            <CustomNavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </CustomNavLink>
          )}
          <CustomNavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </CustomNavLink>
          {experiences.show && (
            <CustomNavLink href={process.env.PUBLIC_URL + "/#experiences"}>
              Experiences
            </CustomNavLink>
          )}
          {repos.show && (
            <CustomNavLink href={process.env.PUBLIC_URL + "/#projects"}>
              Projects
            </CustomNavLink>
          )}
          {repos.show && (
            <CustomNavLink href={process.env.PUBLIC_URL + "/#projects"}>
              Projects
            </CustomNavLink>
          )}
          {skills.show && (
            <CustomNavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </CustomNavLink>
          )}
          <NavDropdown
            title="Cool stuff"
            id="nav-dropdown"
            className=" lead"
          >
            {computerGraphics.show && (
              <NavDropdown.Item
                className="nav-item lead"
                href={process.env.PUBLIC_URL + "/#computer"}
              >
                {" "}
                Computer Graphics
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
