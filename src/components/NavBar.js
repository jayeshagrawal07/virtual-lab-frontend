import React from 'react'
import { LinkContainer }  from  'react-router-bootstrap'
import { Navbar,Nav,NavDropdown ,Dropdown,Button   }  from  'react-bootstrap'
import  { logout }  from  '../actions/userActions'
import { Link }  from "react-router-dom"
import { useDispatch , useSelector} from 'react-redux'
function NavBar() {
    const userLogin = useSelector(state => state.userLogin) 
    const { userInfo } = userLogin
  
    const dispatch = useDispatch()
    const logoutHandler =()=>{  
      dispatch (logout()) 
  }
  
  
    return (
      <>
    <div className="e7070742 pv3-ns ph1-ns bg-white"/>
    <nav className= "navbar navbar-expand-lg navbar-light  rounded container" >
      <div className= "container-fluid">
        <LinkContainer to='/'>
        <Navbar.Brand><img src="/images/VirtualLabs_logo_final.png" alt="Loading" className="image1"/></Navbar.Brand>
        </LinkContainer> 
      <button className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className= "navbar-toggler-icon"></span>
        </button>

        <div className= "collapse navbar-collapse" id="navbarsExample09">
          <ul className= "nav col-12  mb-2 justify-content-right mb-md-0">
            <li className= "nav-item">           
              <Nav.Link href="/" >Home</Nav.Link>              
            </li>
            <li className= "nav-item">            
              <Nav.Link  href="/about">About</Nav.Link>  
            </li>
           <li className= "nav-item">          
              <Nav.Link  href='/ContactUs'>ContactUs</Nav.Link>
            </li> 
            <li className= "nav-item">          
            <Link  to="/signup" className="btn btn-primary">Signup</Link> 
            </li>
            
              
    {userInfo ? ( 
         <NavDropdown title={userInfo.name} id='name'>
            <Link to="/profile">
          <NavDropdown.Item >Profile</NavDropdown.Item>
            </Link>
          <NavDropdown.Item onClick={logoutHandler} >Logout </NavDropdown.Item>
         
         </NavDropdown>


    ):(
  
      <li className= "nav-item">          
      <Link  to="/user/login" className="btn btn-primary">Login</Link> 
      </li>

    )}

            




          </ul>   
        </div>
      </div>
    </nav>
     <hr/>
  
    </>

    )
  }
  


export default NavBar