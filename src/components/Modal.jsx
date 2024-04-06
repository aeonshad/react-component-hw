import React from 'react';

function Modal({ isOpen, onClose, children }) {
    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    ) : null;
}
export default Modal;
