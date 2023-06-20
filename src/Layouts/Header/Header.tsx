import React ,{ useState } from "react";
import "./Header.css"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../Slices/headerSlice";
import { decodeToken } from "react-jwt";





const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate()

  const[user, setUser] = useState(localStorage.getItem('user') || null);
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);

  const handleLogOut =()=>{
    localStorage.removeItem('user');
    setUser(null);
    
    navigate('/')
  };

 

  const cartCount = useSelector(selectCartCount);
  return (
    <header className={`header-scn ${menuOpen ? "menu-open" : ""}`}>
           <div className="container-fluid">
        <div className="hdr-inner">
          <h1 className="logo"><a href="#"><img src="img/logo.jpg" alt=""/>SweetEst</a></h1>
          <nav className="menu">
            <ul>
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="dropdown">
                <a href="#">Categories</a>
                <ul>
                  <li><a href="#">Cookies</a></li>
                  <li><a href="#">Cakes</a></li>
                  <li><a href="#">Pastries</a></li>
                  <li><a href="#">Capcakes</a></li>
                  </ul>
              </li>
             
              <li className="menu-btn"><Link to="/contact us">Contact us</Link></li>
              <li><Link to="/register">Register</Link></li>
              {user ? (
  <li onClick={handleLogOut}><Link to="/">Log Out</Link></li>
) : (
  <li><Link to="/login">Login</Link></li>
)}


            </ul>
          </nav>
          {/* <div className="hdr-right">
            <div className="icons-group">
            
              <button className="icon cart">
              <span className="countno">{cartCount}</span>
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/cart.svg" width="36" height="36" alt="Cart" />
              </button> */}
          <div className="hdr-right">
          {user && (
        <div className="icons-group">
          

        
          <Link to={`/shoppingcart/${decoded.id}`} className="icon cart">

          {/* <Link to={`/shoppingcart`} className="icon cart">  */}
            <span className="countno">{cartCount}</span>
            <img src="https://coderwrap.com/wp-content/uploads/2023/01/cart.svg" width="36" height="36" alt="Cart" />
          </Link>
            
              {/* </button> */}
              <span id="mobiletoggle" className="mobile-toggle"
              onClick={handleToggleMenu}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
             )}
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
