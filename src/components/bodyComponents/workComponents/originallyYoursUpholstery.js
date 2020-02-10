import React, {Component, useState} from "react";
import {
    Col, Row, Card, CardImg, CardBody,
    CardTitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PATIO from '../../../shared/imgs/PatioFurniture.jpg'


function OriginallyYoursUpholstery(){

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const CardHeight = "200px"
const CardWidth = "200px"

        return(
                    <Col>
                        <Card>
                            <CardImg top width={CardWidth} height={CardHeight} src={PATIO} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Originally Yours Upholstery</CardTitle>
                            <Button color="secondary" block onClick={toggle}>Site Details</Button>
                            <Button href="https://originallyyoursuphostery.herokuapp.com/" target="_blank" block> Visit Site </Button>
                            <Button href="https://github.com/m1dunfee/originallyyoursupholstery" target="_blank" block> GitHub </Button>


                            <Modal isOpen={modal} toggle={toggle} className="">
                                <ModalHeader toggle={toggle}>Site Details</ModalHeader>
                                <ModalBody>
                                    <p>
                                        This site was build for a client's small buiness.
                                    </p>
                                    <p>
                                        Tools used to build this site: Bootstrap, React ReactStrap, Node, Axios, Nodemailer.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Close</Button>
                                </ModalFooter>
                            </Modal>
                            </CardBody>
                        </Card>
                    </Col>
        )

}

export default OriginallyYoursUpholstery;