import React from 'react'

const Alert = ({alert}) =>{
    return(
        alert != null && (
            <div className={`alert alert-${alert.type}`} style={{margin:"20px"}}>
                <i className="icon-info-sign"/> {alert.msg}

            </div>
        )
    )
}

export default Alert