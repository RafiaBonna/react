import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <div>
          <ul class="nav">
  <li class="nav-item">
    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/about" class="nav-link">About</Link>
  </li>
  <li class="nav-item">
    <Link to="/contact" class="nav-link">Contact</Link>
  </li>
  <li class="nav-item">
    <Link to="/collection" class="nav-link">Collection</Link>
  </li>
</ul>
        </div>
    );
};

export default Nav;