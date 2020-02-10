import React, {Component, useState} from "react";
import {Row, Col, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from 'axios'
import '../App.css'

const ContactModal = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function handleSubmition(event){
        event.preventDefault()
        const data = new FormData(event.target);
        axios({ 
            method: 'post',
            url: '/email/sendemail',
            data: {
                name: data.get('name'),
                email: data.get('email'),
                company: data.get("company"),
                message: data.get('text')
            }
        }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

  return (
    <div>
      <Button color="secondary" block onClick={toggle}>Email me!</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmition}>
            <FormGroup>
                <Label for="UsersEmail">Email</Label>
                <Input type="email" name="email" id="UsersEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="UsersName">Name</Label>
                <Input type="name" name="name" id="UsersName" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="UsersCompany">Company</Label>
                <Input type="company" name="company" id="UsersCompany" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="primary" onClick={toggle}>Send</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

class Contact extends Component{
    render(){
        return(
            <div>
                <Row id="contact">
                    <Col>
                        <h2 class="text-center">
                            <hr/>
                            Contact
                            <hr/>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Get in touch
                            </CardHeader>
                            <CardBody>
                                <p>
                                    Please email me with any questions or call me at<a className="btn btn-link" role="button" href="tel:(612)-323-4496">(612)-323-4496.</a>
                                    be sure to inclued your name, contact info, company, and reason for calling.
                                </p>
                            </CardBody>
                            <ContactModal/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;
