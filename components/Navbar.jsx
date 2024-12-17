import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { CgShoppingCart, CgUser } from 'react-icons/cg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';
import logo from '../src/assets/Logo.png'; 

const Navbar = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  // Menu items for navigation
  const menuItems = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/platform', label: 'Platform' },
    { href: '/resources', label: 'Resources' },
    { href: '/support', label: 'Support' },
    { href: '/partners', label: 'Partners' },
  ];
 

  // Handle toggle for collapsible nav
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar">

          {/* Logo */}
          <Link href="/">
            <Image src={logo} width={164} height={65} alt="logo" />
          </Link> 
           
          {/* Collapsible Navigation Menu */}
          <div className="nav-container-left">  

              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li className={`nav-item ${isActive(item.href) ? 'active' : ''}`}>
                    {item.label}
                  </li>
                </Link>
              ))}  
          </div>
          
        <div className="nav-container-right">  

            <div className='space-bar'> 
            </div>

            {/* Search Bar */}
            <div className="search-bar">
              <CiSearch />
              <input type="text" placeholder="Search here" style={{  maxHeight:'50%'}}/>
            </div>

            {/* Cart Button */}
            <Link href="/cart">
              <button className="cart" onClick={() => setShowCart(false)}>
                <CgUser size={22} />
                <span className="cart-item-qty">{totalQty}</span>
              </button>
            </Link> 

            {/* Contact Us */}
            <Link href="/contact">
              <li className="nav-item">Contact Us</li>
            </Link>
        </div>      

      {/* Small Screen Navigation */}
      <div className="navbar-smallscreen">

        <RiMenu3Line className="menu-icon" color="black" fontSize={27} onClick={() => setToggleMenu(true)} /> 
          
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay" style={{ display: 'flex', flexDirection: 'rows' , gap: '1rem'}}>
            <Link href="/">
              <Image className="logo-small" src={logo} width={164} height={65} alt="logo" />
            </Link>
            <RiCloseLine
              color="black"
              fontSize={27}
              className="close_icon"
              onClick={() => setToggleMenu(false)}
            />  

              {/* Collapsible Navigation Menu */} 
                  {menuItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <li className={`nav-item ${isActive(item.href) ? 'active' : ''}`}>
                        {item.label}
                      </li>
                    </Link>
                  ))}    

              {/* Cart Button */}
              <Link href="/cart">
                <button className="cart" onClick={() => setShowCart(false)}>
                  <CgUser size={22} />
                  <span className="cart-item-qty">{totalQty}</span>
                </button>
              </Link> 

              {/* Contact Us */}
              <Link href="/contact">
                <li className="nav-item">Contact Us</li>
              </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
