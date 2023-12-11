import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarItem (props) {
  return(
    <li className="nav-item">
        <Link className="nav-link" to={props.link}>{props.text}</Link>
    </li>
  );
}
