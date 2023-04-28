import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height:"40px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}.
      </div>}
    </div>
  )
}

export default Alert