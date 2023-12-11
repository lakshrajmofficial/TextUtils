import React from 'react'

export default function NavbarDropDown(props){
    return(
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.text}
          </a>
          <ul class="dropdown-menu">
            {renderDropDownItems(props.items)}
          </ul>
        </li>
    );

    function renderDropDownItems(items){
        let htmlEle = []
        props.items.forEach(item => {
            htmlEle.push(<li><a className='dropdown-item' href={item.link}>{item.text}</a></li>);       
        });
        return htmlEle;
    }
}