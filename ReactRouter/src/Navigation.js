import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {
  return(
    <nav>
      <Link to='/clicker'>Clicker</Link>
      <Link to='/emoji'>Emoji</Link>
      <Link to='/'>Home</Link>
      <Link to='/weather'>Weather</Link>
      <Link to='/spa'>SPA</Link>
    </nav>
  )
}
