import React from 'react'

export default function AlertComponent(props) {
  return (
    props.alert && props.alert.message &&
    <>
         <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.message}</strong>
        </div>
    </>
  )
}
