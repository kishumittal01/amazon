import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
      alert("You are signing out!")
    }
  }

  return (
    <div className='header'>
      <Link to="/">  
        <img className='header_logo' src="data:image/png;base64,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" alt="navbarlogo" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" placeholder='Search Amazon.in' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>  
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        
        <Link to="/checkout">
          <div className="header_optionBasket">
              <span className="cart_total_item">
                {basket?.length}
              </span>
              <FiShoppingCart className='cart_trolley'/>
          </div>
        </Link>  
      </div>
    </div>
  )
}

export default Header
