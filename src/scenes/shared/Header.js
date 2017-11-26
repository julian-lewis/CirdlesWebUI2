import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/squid">Squid</Link>
        </li>
        <li>
          <Link to="/ambapo">Ambapo</Link>
        </li>
      </ul>
    </nav>
  </header>
);
