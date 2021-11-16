import React, { HTMLAttributes, ReactNode, useState } from 'react';
/** Added react-bootstrap */
import { Modal, Button } from "react-bootstrap";
/** Bootstrap css required to load bootstrap stylesheet */
import "bootstrap/dist/css/bootstrap.css";
import './Modal.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Required ReactNode that needs to exist between component tags */
    children: ReactNode;
    /** Using to show modal target button (using the same two varrients given for Button componnet) */
    variant?: 'default' | 'large';
    /** callback function to be called when there is a method click */
   
    /** will allow for http redirect */
    href?: string;
}

/**
 * Modal component for the Apollo Component Library
 */
export const myModal = ({children, href, variant = "default", ...props}: Props) => {

  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

    const myModal: JSX.Element = (
      <>
        <button {...props} data-toggle="modal" onClick={handleShow} data-target="#exampleModal" className={`apollo-component-library-button ${variant}`}>
            {children}
        </button>
        <Modal show={show} className="modal-dialog-centered">

        <Modal.Header closeButton onClick={handleClose}>

          <Modal.Title>Modal Title</Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <></>

        </Modal.Body>
        ...
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Close Modal</Button>

        </Modal.Footer>

      </Modal>
      </>
    )

    // if the href element exists, render it with link capabilities, else just render the standalone button
    return myModal;   
}









































