import React from 'react'

export default function NavBarSearchBar(props){

    return(
        <form className="d-flex mx-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">{props.text}</button>
        </form>
    );
}