import React, { useState } from 'react'
import Image from 'next/image'
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'
import logo from '../src/assets/Logo.png'
//import Link from 'next/link'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useStateContext } from '../context/StateContext';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({Searchproducts}) => {
  const {showCart, setShowCart, totalQty} = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('')

  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav>
      <Link href='/'>
        <Image src={logo} width={202} height={140} alt='logo' />
      </Link> 
/*
      <ul className='nav-links'>
        <Link href='/female'><li className='nav-item'>&nbsp;Female&nbsp;</li></Link>
        <Link href='/male'><li className='nav-item'>&nbsp;Male&nbsp;</li></Link>
        <Link href='/kids'><li className='nav-item'>&nbsp;Kids&nbsp;</li></Link>
        <Link href='/products'><li className='nav-item'>&nbsp;All Products&nbsp;</li></Link>
      </ul>
*/
      <ul className='nav-links'>
        <li className={isActive('/female') ? 'active' : ''}>
          <Link href="/female">&nbsp;Female&nbsp;</Link>
        </li>
        <li className={isActive('/male') ? 'active' : ''}>
          <Link href="/male">&nbsp;Male&nbsp;</Link>
        </li>
        <li className={isActive('/kids') ? 'active' : ''}>
          <Link href="/kids">&nbsp;Kids&nbsp;</Link>
        </li>
        <li className={isActive('/kids') ? 'active' : ''}>
          <Link href="/products">&nbsp;All Products&nbsp;</Link>
        </li>
      </ul>
      <style jsx>{`
        nav ul {
          display: flex;
          list-style: none;
        }
        nav ul li {
          margin-right: 20px;
        }
        nav ul li.active a {
          font-weight: bold;
          color: #0070f3;
        }
      `}</style>


        <div className='search-bar'>
          <CiSearch />
          <input 
            type='text' 
            placeholder='What you looking for'/>
        </div>
        {/* onChange={(event) => {
              setSearchTerm(event.target.value);
          }} */}

      {showCart ?
      <Link href='/cart'>
        <button className='cart' onClick={() => setShowCart(false)}>   
          <CgShoppingCart size={22} />
          <span className='cart-item-qty'>{totalQty}</span> 
        </button>
      </Link> 
      : 
      <button className='cart' onClick={() => setShowCart(true)}> 
        <CgShoppingCart size={22} />
        <span className='cart-item-qty'>{totalQty}</span>
      </button> 
      }

      <div className='navbar-smallscreen'>
        <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='navbar-smallscreen_overlay'>
            <Link href='/'>
              <Image className='logo-small' src={logo} width={140} height={140} alt='logo' />
            </Link>
            <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
            <ul className='navbar-smallscreen_links'>
              <Link href='/cart'>
                  <button className='cart-small-screen' onClick={() => setShowCart(false)}>   
                    <CgShoppingCart size={22} />
                    <span className='cart-item-qty'>{totalQty}</span> 
                  </button>
              </Link> 
              <Link href='/female'><li>Female</li></Link>
              <Link href='/male'><li>Male</li></Link>
              <Link href='/kids'><li>Kids</li></Link>
              <Link href='/products'><li>All Products</li></Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar