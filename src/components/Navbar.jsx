import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow'>
            <div className="navbar  max-w-screen-lg mx-auto bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">News <span className='text-blue-900'>Portal</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='font-medium'><Link>Home</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;