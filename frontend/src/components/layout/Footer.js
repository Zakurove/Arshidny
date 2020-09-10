import React, { Component, Fragment } from "react";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
      <div class="push"></div>
      <footer className="page-footer font-small bg-dark pt-4 mt-5 ">
      <div className="container ">

      <div>
      <ul className="list-unstyled list-inline text-center" style={{fontSize: '1.3em'}}>
         <li className="">
          <a className="btn-floating btn-tw mx-1 " href="https://twitter.com/Arshidnyksauhs?s=20"> 
            <i className="fab fa-twitter text-info"> </i>
          </a> 
         </li>

         <li className="">
            <i className="text-info"> هذا الموقع تحت إدارة فريق أرشدني ٢٠٢٠ – ٢٠٢١</i>
         </li>
      </ul>
      </div>

      <div className="footer-copyright text-center pb-3 text-warning" style={{fontSize: '1.2em'}}>Developed by:
         <a href="https://www.linkedin.com/in/nasser-alharbi-44b18b1a5/" className="text-warning"> Nasser Alharbi </a>
       </div>
      </div>


      </footer>
      </Fragment>

    );
  }
}

export default Footer;
