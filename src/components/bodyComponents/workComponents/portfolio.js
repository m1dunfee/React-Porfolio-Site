import React, {Component, useState} from "react";
import {
    Col, Row, Card, CardImg, CardBody,
    CardTitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CONFETTI from '../../../shared/imgs/confetti.jpeg'

function Portfolio(){

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const CardHeight = "200px"
const CardWidth = "200px"
        
        return(
                    <Col>
                        <Card>
                            <CardImg top width={CardWidth} height={CardHeight} src={CONFETTI} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Portfolio</CardTitle>
                            <Button color="secondary" block onClick={toggle}>Site Details</Button>
                            <Button block> Visit Site </Button>
                            <Button href="https://github.com/m1dunfee/portfolio" target="_blank" block> GitHub </Button>


                            <Modal isOpen={modal} toggle={toggle} className="">
                                <ModalHeader toggle={toggle}>Site Details</ModalHeader>
                                <ModalBody>
                                    <p>
                                        This site was build as a portfolio for your convenience.
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

export default Portfolio;