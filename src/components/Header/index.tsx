import React from 'react';
import { useSelector } from 'react-redux'

import Logo from '../../images/logo-instagram.png';
import { FiUser} from "react-icons/fi";



const Header = () => {

  const {name} = useSelector((state:any)=>state.user)

  return(
    <div className="header">
      <header>
        <img src={Logo} alt="Logo Instagram" />
        <div className="top-info"> 
          <span>
            <FiUser />
            {name}
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header;