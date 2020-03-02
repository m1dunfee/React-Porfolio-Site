import React, { Component, useState } from "react";
import Nucamp from './workComponents/nucamp'
import Portfolio from './workComponents/portfolio'
import OriginallyYoursUpholstery from './workComponents/originallyYoursUpholstery'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap"

function Work() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color="light" light onClick={toggle}>Work</Button>
            <Modal isOpen={modal} toggle={toggle} className=''>
                <ModalHeader toggle={toggle}>Projects</ModalHeader>
                <ModalBody>

                            <Portfolio />
                            <hr/>
                            <OriginallyYoursUpholstery />
                            <hr/>
                            <Nucamp />

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Work;