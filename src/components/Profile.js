import React from 'react';
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Profile() {
    // render()
        return (
            <Jumbotron className= "jumbotron">
                <Container>
                    <h1>Hermes Vierma</h1>
                    <p>
                    Hi! I'm a student at Code the Dream and a future front-end developer!
                    </p>
                    <p>
                    <Button className="button" variant="primary"><Link className="button" to ="./contact">Contact info</Link></Button>
                    </p>
                </Container>
            </Jumbotron>
            );
        }
    
export default Profile;
