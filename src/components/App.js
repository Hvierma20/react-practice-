
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Profile from './Profile.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
        <Route exact path="/" component={Profile} />
        <Route path="/contact" component={Contact} />
          <Projects /> 
        </div>
      </BrowserRouter>
    );
  }
}
export default App;





// import React, { useEffect, useState} from 'react';
// import Airtable from 'airtable';
// // import Jumbotron from 'react-bootstrap/Jumbotron';
// // import Container from 'react-bootstrap/Container';
// // import Button from 'react-bootstrap/Button';
// // import Projects from './Projects';

// const base = new Airtable({ apiKey: "keyuCwWemPdI433NA" }).base("apphtk9gPAJYUcbWF");
// const baseId = "apphtk9gPAJYUcbWF";
// const apiKey = "keyuCwWemPdI433NA";
// function App() {
//     const [projectDescription, setProjectDescription] = useState([]);
    
//     useEffect(() => {
//       // base("portfolioHermes")
//         // .select({ view: "Grid view" })
//         // .eachPage((records, fetchNextPage) => {
//         //   console.log(records);
//         //   fetchNextPage();
//         // });
//         fetch(`https://api.airtable.com/v0/${baseId}/portfolioHermes?api_key=${apiKey}`) 
      
//         .then(response =>
//           response.json()
//         )
//         .then(data => {
//           console.log(data)
//           setProjectDescription(data.records)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }, []);
//     return (
//       <div>
//       {projectDescription.map(project => (
//         <p>{project.fields.Name}</p>
//       ))}
//         {/* <Jumbotron>
//         <Container>
//             <h1>Hermes Vierma</h1>
//             <p>
//               Hi! I'm a student at Code the Dream and a future front-end developer!
//             </p>
//             <p>
//               <Button variant="primary">Contact info</Button>
//             </p>
//             <Projects></Projects>
//           </Container>
//         </Jumbotron> */}
//       </div>

//     );
  
//     }
// export default App;
