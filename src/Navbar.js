import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <section>
          <nav className="navbar navbar-expand-lg navbar-light  text-white">
            <Link to="Get"><a className="navbar-brand" href="#"> Get the App</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">

                  <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                </li>

                <li className="nav-item active">

                  <Link to="/Book"><a className="nav-link" href="#"> Order Food <span className="sr-only">(current)</span></a></Link>
                </li>

                <li className="nav-item active">

                  <Link to="/Contact"><a className="nav-link" href="#">Contact us <span className="sr-only">(current)</span></a></Link>
                </li>

                <li className="nav-item active">
                  <Link to="/Account"><a className="nav-link" href="#">Create an account <span className="sr-only">(current)</span></a></Link>
                </li>


              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}

export default Navbar;