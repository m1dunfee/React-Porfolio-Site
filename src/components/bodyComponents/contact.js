import React, {Component, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
        Form, FormGroup, Label, Input, } from 'reactstrap'
import axios from 'axios'
import '../../App.css'

function Contact(){
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
    <>
      <Button color="light" light onClick={toggle}>Contact</Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Contact</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmition}>
            <FormGroup>
                <Label for="UsersEmail">Email</Label>
                <Input type="email" name="email" id="UsersEmail" placeholder="abc@xyz" />
            </FormGroup>
            <FormGroup>
                <Label for="UsersName">Name</Label>
                <Input type="name" name="name" id="UsersName" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
                <Label for="UsersCompany">Company</Label>
                <Input type="company" name="company" id="UsersCompany" placeholder="Company" />
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
    </>
  );
}

export default Contact
