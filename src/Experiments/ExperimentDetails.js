import React from 'react'
import experiments from '../experiments'
import { Container } from 'react-bootstrap'
import  { useParams ,Link } from 'react-router-dom'
function ExperimentDetails() {
    const { id } = useParams();
    const experiment  = experiments.find((p) =>p._id == id)
  return (
<Container >
    <div className ="row g-5">
    <div className ="col-md-11">
      <h3 className ="pb-4 mb-4 fst-italic text-center border-bottom"> Experiment- {experiment._id} </h3>

      <article className ="blog-post">
        <h2 className ="blog-post-title">Objective: {experiment.Objective}</h2>
       
    <hr/>
        <h2>Requirement: {experiment.Requirement} </h2>
       
    <hr/>   
        <h3>Theory :</h3>
        <h5>{experiment.heading1}</h5>
        <p>{experiment.paragraph1}</p>
        
        <h5>{experiment.heading2}</h5>
        <p>{experiment.paragraph2}</p>
       
        <h5>{experiment.heading3}</h5>
        <p>{experiment.paragraph3}</p>
        
      </article>

    </div>
  </div>
    <Link className="btn btn-primery" to={`/experiments`}>Go Back</Link>
</Container>
  )
}

export default ExperimentDetails