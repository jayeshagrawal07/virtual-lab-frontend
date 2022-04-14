import React from 'react'
import experiments from '../experiments'
import { Container } from 'react-bootstrap'
import  { useParams ,Link } from 'react-router-dom'
function ExperimentDetails() {
    const { id } = useParams();
    const experiment  = experiments.find((p) =>p._id === id)
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
        <img  className="mt-3  mb-3"  src={experiment.img1} alt="exp img"/>
        <h5>{experiment.heading3}</h5>
        <p>{experiment.paragraph3}</p>
        <img className="mt-3  mb-3" src={experiment.img2} alt="exp img"/>
        <h5>{experiment.heading3}</h5>
        <p>{experiment.paragraph3}</p>
        <img>{experiment.img3}</img>

      </article>

    </div>
  </div>
  <div className="d-flex gap-2 ">
    <Link className="btn btn-primary mb-5 mt-4  " to={`/experiments`}>Go Back</Link>
    <Link className="btn btn-primary mb-5 mt-4  " to={`/simulation`}>Simulation</Link>
</div>
</Container>
  )
}

export default ExperimentDetails