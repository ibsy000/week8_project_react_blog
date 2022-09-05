import React from 'react'

export default function FlashMessage(props) {
    return (
        <div className={`alert alert-${props.category} text-center alert-dismissible fade show`}
            role="alert">
            <strong>{props.message}</strong>
            <button type='button' className="btn-close" onClick={() => props.flashMessage(null,null)}></button>

        </div>
    )
}
