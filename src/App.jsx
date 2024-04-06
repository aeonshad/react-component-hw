import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h1>Modal Content</h1>
                <p>The content has been added</p>
            </Modal>
        </div>
    );
}

export default App;

