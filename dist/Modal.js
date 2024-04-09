import React from 'react';
import './modal.css';
import { ReactComponent as CloseIcon } from './close-outline.svg';
function Modal({
  isOpen,
  onClose,
  children
}) {
  return isOpen ? /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-btn-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    className: "modal-btn-close-icon"
  })), children)) : null;
}
export default Modal;