import React from 'react'

import {Link} from'react-router-dom'

export default function Footer() {
  return (
    <div>
    <footer className="row row-cols-5 py-5 my-5 border-top text-success bg-dark">
    <div className="col">
      <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        {/* <svg className="bi me-2" width="40" height="32"><use Link:to="#bootstrap"></use></svg> */}
      </Link>
      <p className="text-muted">© 2023  FooDies, Inc</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
  </footer>
      {/* <span className="text-muted">© 2023 FooDies, Inc</span> */}
    </div>  

   
 
  )
}
