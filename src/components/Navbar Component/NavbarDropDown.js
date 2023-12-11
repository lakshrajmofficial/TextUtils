import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarDropDown(props){
    return(
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.text}
          </Link>
          <ul class="dropdown-menu">
            {renderDropDownItems(props.items)}
          </ul>
        </li>
    );

    function renderDropDownItems(items){
        let htmlEle = []
        props.items.forEach(item => {
            htmlEle.push(<li><Link className='dropdown-item' to={item.link}>{item.text}</Link></li>);       
        });
        return htmlEle;
    }
}