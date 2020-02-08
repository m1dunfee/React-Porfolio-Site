import React, {Component, useState} from "react";
import {
    Col, Row, Card, CardImg, CardBody,
    CardTitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NUCAMP from '../../../shared/imgs/nucamp.png'


function Nucamp(){

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const CardHeight = "200px"
const CardWidth = "200px"

        return(
                    <Col>
                        <Card>
                            <CardImg top width={CardWidth} height={CardHeight} src={NUCAMP} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>NuCamp Demo</CardTitle>
                            <Button color="secondary" block onClick={toggle}>Site Details</Button>
                            <Button href="https://nucamp-demo-site.herokuapp.com/" target="_blank" block> Visit Site </Button>
                            <Button href="https://github.com/m1dunfee/Nucamp-demo-site" target="_blank" block> GitHub </Button>


                            <Modal isOpen={modal} toggle={toggle} className="">
                                <ModalHeader toggle={toggle}>Site Details</ModalHeader>
                                <ModalBody>
                                    <p>
                                        This site was built as an exercise to practice Bootstrap.
                                    </p>
                                    <p>
                                        Tools used to build this site: Bootstrap, Node
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            </CardBody>
                        </Card>
                    </Col>
        )

}

export default Nucamp;