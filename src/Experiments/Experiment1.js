import React from 'react'
import { Container ,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
function Experiment1() {
    const navigate   = useNavigate()
    const simulation = ()=>{
     navigate(`/simulation`)
    }
  return (
      <Container>
    <div className="col-md-11">
        <h1 className="text-center">Experiment-1</h1>
        <hr/>    
    <h3 className="pb-4 mb-4  border-bottom">
      objective-INTRODUCTION TO  JFLAP
    </h3>

    <article className="blog-post">
        <div className="d-flex">
      <h2 className="blog-post-title fw-bold">Requirement-</h2>
      <h3 className="mt-1"> JFLAP version 7.0 or higher</h3>
      </div>
      <hr/>
      <h2>THEORY:</h2>
     
      <blockquote className="blockquote">
        <h3>What is JFLAP?</h3>
      </blockquote>
      <p>JFLAP program makes it possible to create and simulate automata. Learning about automata with pen and paper can be difficult, time consuming and error-prone. With JFLAP we can create automata of different types and it is easy to change them as we want. JFLAP supports creation of DFA and NFA, Regular Expressions, PDA, Turing Machines, Grammars and more.</p>
      <h3>Setup</h3>
      <p>JFLAP is available from the homepage: (www.JFLAP.org). From  there  press  “Get FLAP” and  follow the instructions. You will notice that JFLAP have a .JAR extension. This means that you need Java to  run JFLAP. With Java correctly installed you can simply select the program  to run it. You can also use   a command console run it from the files current directory with, Java –jar JFLAP.jar.</p>
       <h3>Using JFLAP</h3>
       <p>When you first start JFLAP you will see a small menu with a selection of eleven different automata and rule sets. Choosing one of them will open the editor where you create chosen  type  of automata.  Usually you can create automata containing states and transitions but there is also  creation  of  Grammar and Regular Expression which is made with a text editor.</p>
    </article>
      
      <Button className="mb-2" onClick={simulation}>Simulation</Button>

  </div>
  </Container>
  )
}

export default Experiment1