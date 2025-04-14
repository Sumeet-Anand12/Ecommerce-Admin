import React from 'react';
import logo from '../../assets/Image/Banner/logo.jpg';
import { IoMdMenu } from 'react-icons/io';
import Search from './Search';
import UserDropdown from './UserDropdown';
import CartIcons from './CartIcons';
import UseSidebar from '../../hooks/useSidebar';

const ResponsiveHeader = ({toggleSidebar}) => {

  
  return (
    <div className="px-4">
      
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo & Menu */}
        <div className="d-flex align-items-center gap-2">
          <IoMdMenu size={30} onClick={toggleSidebar} />
          <img src={logo} alt="logo" className="responsive-logo" />
        </div>

        {/* Right Side: User + Cart Icons */}
        <div className="d-flex align-items-center gap-3">
          <UserDropdown />
          <CartIcons />
        </div>
      </div>

      {/* Search */}
      <div className="mt-2">
        <Search />
      </div>
    </div>
  );
};

export default ResponsiveHeader;
