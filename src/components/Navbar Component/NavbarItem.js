import React from 'react'

export default function NavbarItem (props) {
  return(
    <li className="nav-item">
        <a className="nav-link" href={props.link}>{props.text}</a>
    </li>
  );
}
