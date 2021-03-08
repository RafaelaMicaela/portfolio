import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();
  
    const trackScreenWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      if (width > 600) {
        setOpen(true);
      }
    };
  
    const handleClose = () => {
      if (screenWidth < 600) {
        setOpen(false);
      }
    };
  
    useEffect(() => {
      trackScreenWidth();
      window.addEventListener("resize", trackScreenWidth);
      return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);
  
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/menu-bars.png`}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cross-menu-icon.png`}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
         
            <ul style={{ left: open ? "0" : "-100vw" }}>

            <li>
                <Link
                  to="/home"
                  onClick={handleClose}
                  style={{ color: location.pathname === "/home" && "#D3BBED" }}
                >
                  Home
                </Link>
              </li>
        
              <li>
                <Link
                  to="/about"
                  onClick={handleClose}
                  style={{ color: location.pathname === "/about" && "#D3BBED" }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  onClick={handleClose}
                  style={{ color: location.pathname === "/project" && "#D3BBED" }}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleClose}
                  style={{ color: location.pathname === "/contact" && "#D3BBED" }}
                >
                  Contado
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
 export default NavBar; 
