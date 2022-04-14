import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
      <>
    <footer className="text-center text-lg-start bg-light text-muted">
    <Container>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
      <div className="  me-5 d-none d-lg-block">
        <span >Get connected with us on social networks:</span>
      </div>
     
  
      <div>
        <a href="https://www.facebook.com/PIEMR/" target="blank" className="me-4 text-reset">
        <i className="bi bi-facebook"/>
        </a>
        <a href="https://twitter.com/piemr_indore?lang=en"target="blank"  className="me-4 text-reset">
         <i className="bi bi-twitter"/>
        </a>
        <a href="https://www.piemr.edu.in/" target="blank" className="me-4 text-reset">
        <i className="bi bi-google"/>
        </a>

        <a href="https://www.instagram.com/piemr_indore/" target="blank"  className="me-4 text-reset">
        <i className="bi bi-instagram"/>
        </a>
        <a href="https://in.linkedin.com/school/piemr/" target="blank" className="me-4 text-reset">
        <i className="bi bi-linkedin "/>
        </a>
        
      </div>
     
    </section>
    </Container>

    <section className="">
      <div className="container text-center text-md-start mt-5">
  
        <div className="row mt-3">
        
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
             <img  className="img2" src="/images/logo.jpg"/><br/>Prestige Institute Of Engineering Management And Research
            </h6>
          
            <p> Below you can see the necessary information if you like to contact us.</p>
          </div>
         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" className="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" className="text-reset">React</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Laravel</a>
            </p>
          </div>
     
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p><a href="http://183.182.87.181/Accsoft2/Login.aspx" target="blank" className="text-reset">AccSoft(Staff/Faculty)</a></p>
            <p><a href="http://183.182.87.181/Accsoft2/studentLogin.aspx" target="blank" className="text-reset">AccSoft (Students/Parents)</a></p>
            <p><a href="https://www.piemr.edu.in/?departments=computer-science-engineering-2" target="blank" className="text-reset">Computer Science & Engineering</a> </p>
            <p><a href="http://111.118.241.141/moodle/" target="blank" className="text-reset">MOODLE</a></p>
          </div>
  
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">  
            <h6 className="text-uppercase fw-bold mb-4"> Contact </h6>
            <p><i className="bi bi-geo-alt-fill"></i>Prestige Vihar, Scheme No. 74  Sector-D, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
            <p><i className="bi bi-envelope-fill"></i> info@piemr.edu.in</p>
            <p><i className="bi bi-telephone-fill"/> Registrar - 0731-4013333</p>
          </div>
        
        </div>
       
      </div>
    </section>
   
    
    <div className="text-center p-4">
      © 2021 Copyright: 
    </div>
   
  </footer>
  </>
  )
}

export default Footer