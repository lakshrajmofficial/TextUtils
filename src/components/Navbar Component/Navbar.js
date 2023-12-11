import React from 'react'

import NavbarItem from './NavbarItem';
import NavbarDropDown from './NavbarDropDown';
import NavBarSearchBar from './NavbarSearchBar';
import NavbarSwitch from './NavbarSwitch';

export default function Navbar(props){

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {renderNavbar(props.navbarProps.filter(navbarProp => navbarProp.type !== "search" && navbarProp.type !== "switch"))}
            </ul>
            {renderNavbar(props.navbarProps.filter(navbarProp => navbarProp.type === "search"))}
            {renderNavbar(props.navbarProps.filter(navbarProp => navbarProp.type === "switch"))}
          </div>
        </div>
      </nav>
    );

    function renderNavbar (arrayProps){
      let htmlEle=[];
      if(arrayProps){
        arrayProps.forEach(element => {
          if(element.type === "link"){
            htmlEle.push(<NavbarItem text={element.text} link={element.link}/>);
          }else if(element.type === "dropdown"){
            htmlEle.push(<NavbarDropDown text={element.text} items={element.items}/>);
          }else if(element.type === "search"){
            htmlEle.push(<NavBarSearchBar text={element.text}/>) ; 
          }else if(element.type == "switch"){
            htmlEle.push(<NavbarSwitch text={element.text} mode={props.mode} toggleMode={props.toggleMode}/>)
          }
        });

      }
      return htmlEle;
    }

}