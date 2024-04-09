import React from 'react';
import './modal.css';
import { ReactComponent as CloseIcon } from './close-outline.svg';

function Modal({ isOpen, onClose, children }) {
    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-btn-close" onClick={onClose}>
                    <CloseIcon className="modal-btn-close-icon" />
                </button>
                {children}
            </div>
        </div>
    ) : null;
}
export default Modal;
