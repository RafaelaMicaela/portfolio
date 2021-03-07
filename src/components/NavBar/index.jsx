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
         
          <div className="list-wrapper">
           
            
            <ul style={{ left: open ? "0" : "-100vw" }}>
        
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
                  to="/works"
                  onClick={handleClose}
                  style={{ color: location.pathname === "/works" && "#D3BBED" }}
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
