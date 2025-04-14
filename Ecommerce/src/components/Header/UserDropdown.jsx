import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import UseDropdown from '../../hooks/useDropdown';

const UserDropdown = () => {
  const { open, toggleDropdown, ref } = UseDropdown();

  return (
    <div className="position-relative">
      <FaUser
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
        role="button"
        tabIndex={0}
        aria-label="User menu"
      />
      <ul className={`user-dropdown ${open ? 'show' : ''}`} ref={ref}>
        <li className="py-1">
          <NavLink to="/login" className="text-decoration-none text-black">Login</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/register" className="text-decoration-none text-black">Register</NavLink>
        </li>
        <li className="py-1">
          <NavLink to="/logout" className="text-decoration-none text-black">Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
