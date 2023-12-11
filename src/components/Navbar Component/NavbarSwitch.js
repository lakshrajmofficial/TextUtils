import React from 'react'

export default function NavbarSwitch(props) {
  return (
    <>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
        <label className={`form-check-label ${props.mode === "dark" ? 'text-light' : ''}`} htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>
    </>
  )
}
