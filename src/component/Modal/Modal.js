import React from 'react';
import "./modal.scss"

function Modal({children}) {
    return (
        <div className="modal-box">
            <div>{children}</div>
        </div>
    );
}

export default Modal;