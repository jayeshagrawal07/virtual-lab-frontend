import React from 'react'
import {Link }  from "react-router-dom"
import { useParams } from "react-router-dom"

function Main( ) {


return (
      <>
    <div className="container cards mb-3" >
   
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
      {/* card1 */}
      <div className="col">
      <div className="card" >
          
          <div className="card-body">
            <h5 className="card-title ">Introduction</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Read More...</a>
          </div>
      </div>
      </div>

{/* card2 */}
      <div className="col"> 
          <div className="card">
              <div className="card-body">
              <h5 className="card-title ">List Of Experiments</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>        
                 <Link  to="/experiments" className="btn btn-primary">Open List</Link>                
              </div>
          </div>
      </div>

{/* card3 */}
      <div className="col"> 
          <div className="card">
              <div className="card-body">
              <h5 className="card-title ">Feedback</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>        
                 <Link  to="/feedback " className="btn btn-primary">Feedback</Link>                
              </div>
          </div>
      </div>
</div>
 
  </div>

</>
  )
}

export default Main