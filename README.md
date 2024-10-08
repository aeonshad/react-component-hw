# ⚠️ Package Deprecation

**This package is deprecated and will no longer be maintained.**

Please use [react-modal-component-hw](https://www.npmjs.com/package/react-modal-component-hw) instead.

---

![status](https://img.shields.io/badge/Status-Deprecated-red.svg)
<a href='https://github.com/aeonshad/react-component-hw/blob/main/README.fr.md'><img alt="Static Badge" src="https://img.shields.io/badge/version-French%7CFran%C3%A7ais-%2322802b?style=flat&logo=readme&logoColor=%23b3bd68&label=Readme"></a>
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.2.0-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.2.4-red?style=flat&logo=NPM&label=NPM"></a>
<a href='https://github.com/aeonshad/react-component-hw/blob/main/LICENSE'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

A simple and customizable modal window component for React applications.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Props](#props)
-   [Example](#example)
-   [Styles](#styles)
-   [License](#license)

## Installation

To install the modal component in your React project, you can use npm or yarn:

```bash
npm install react-component-hw
```

or

```bash
yarn add react-component-hw
```

## Usage

To use the Modal component in your React application, import it into your file and incorporate it into your JSX or JS code.

```jsx
import React, { useState } from 'react';
import Modal from 'react-component-hw';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
                <button onClick={toggleModal}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default App;
```

## Props

The Modal component accepts the following props:

-   `isOpen` (required): A boolean indicating whether the modal should be displayed or not.
-   `onClose` (required): A callback function called when the modal should be closed.
-   `children`: The elements to be displayed inside the modal.

## Example

You can find an example of using the Modal component in the `src/App.jsx` file. To run the example, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` or `yarn install` to install the dependencies.
4. Run `npm start` or `yarn start` to start the application.

## Styles

The Modal component does not provide default styles for the modal window itself. You are free to add your own CSS styles to customize the appearance of the modal as needed. However, the component may include default styles for the overlay (the dark background that appears behind the modal), the window, and the close button. If you wish to customize these styles, you can use the following CSS classes:

-   `modal-overlay`: Class for the modal overlay.
-   `modal-container`: Class for the modal window itself.
-   `modal-btn-close`: Class for the close button of the modal.
-   `modal-btn-close-icon`: Class for the close button icon of the modal.
-   `modal-btn-close-icon:hover`: Pseudo-class when hovering over the close button icon of the modal.

## License

This project is licensed under the [MIT](LICENSE).

---

