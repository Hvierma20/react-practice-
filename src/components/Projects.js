import React, { useEffect, useState} from 'react';
import  Card  from 'react-bootstrap/Card';
import Airtable from 'airtable';



const baseId = process.env.REACT_APP_BASE;
const apiKey = process.env.REACT_APP_API_KEY;
function Projects() {
    const [projectDescription, setProjectDescription] = useState([]);
    
    useEffect(() => {
    
        fetch(`https://api.airtable.com/v0/${baseId}/portfolioHermes?api_key=${apiKey}`) 
      
        .then(response =>
          response.json()
        )
        .then(data => {
          console.log(data)
          setProjectDescription(data.records)
        })
        .catch(error => {
          console.log(error)
        })
    }, []);
    return (
   
        <div className="projects">
            <div className="d-flex justify-content-between cards">   
                {projectDescription.map(project => (
                    <Card className="text-center" style={{ width: '15rem' }} key = { project.id }>
                        <Card.Header className ="cardHeader"><h4>{ project.fields.Name }</h4></Card.Header>
                        <Card.Body>
                        <p>{ project.fields.Description }</p>
                        </Card.Body>
                        <Card.Footer className="links">
                        <p>{ project.fields.Links }</p>   
                        </Card.Footer>
                    </Card> 
                ))} 
            </div>
        </div>
      
        
    );
}
export default Projects;