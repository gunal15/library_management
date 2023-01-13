import React from 'react'
import { Link } from 'react-router-dom'


function Topbar() {
  return (
  <>
    <nav className="navbar navbar-light " style={{backgroundColor:"#D6EA82"}}>
             <div className="container-fluid">
                <div> 
              <h4 className="mr-2 d-none d-lg-inline text-black-2000 medium d-flex-end"> Gunal N</h4>
                    <Link className="btn btn-dark btn-sm" to="/" style={{marginLeft:"55rem"}}>Logout</Link>
                </div>
            </div>
        </nav>
  </>
  )
}

export default Topbar
