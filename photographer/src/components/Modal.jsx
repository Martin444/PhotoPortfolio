import React from 'react'
import classNames from 'classnames'


export default function Modal(props) {

    const ModalClass = classNames('Modal-wrapper', {
        showModal: props.show,
    })
    return (
        <div className="Modal">
            {props.show && 
            <div className="Modal-overlay" onClick={props.close}/>
            }
            <div className={ModalClass}>
                {props.children}
            </div>
        </div>
    )
}
