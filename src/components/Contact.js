import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Contact() {
    // render()
        return (
            <Modal.Dialog>
                <Modal.Header className="cardHeader">
                    <Modal.Title>Hermes Vierma</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul><h6>Phone:</h6>(312) 451-3331</ul>
                    <ul><h6>e-mail:</h6> inghermes.vierma@gmail.com</ul>
                    <ul><h6>Linkdln:</h6> https://www.linkedin.com/in/hermes-vierma-a89463a3/</ul>
                    <ul><h6>Gihub:</h6> https://github.com/Hvierma20</ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="button" variant="secondary"><Link exact to ="./">Close</Link></Button>
                </Modal.Footer>
            </Modal.Dialog>
            );
        }
    
export default Contact;
