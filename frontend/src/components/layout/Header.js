import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      
        <Fragment>
        <span className="nav-link" style={{fontSize:"20px", color: '#1c6d8b'}}>
          <strong >{user ? `As ${user.username}` : ""}</strong>
        </span>
        
        
          <a onClick={this.props.logout} className="nav-link " style={{fontSize:"20px", color: "#bc4332"}}>
            Logout
          </a>
          </Fragment>
        
    );
    const guestLinks = (
<span></span>
    );
    return (
      <Fragment>

            <div className="row bg-gray pb-1"style={{}}>
          <a className="navbar-brand  mx-auto d-block" >
            <img src={"/static/media/BrainLogo.png"} className="" alt="" style={{ height: "130px"}}/>
          </a>

          <a className="navbar-brand mx-auto d-block " >
            <img src={"/static/media/ArshidnyLogo.png"} className="" alt="" style={{ height: "130px"}} />
          </a>

          <a className="navbar-brand  mx-auto d-block" >
            <img src={"/static/media/KSAULogo.png"} className="" alt="" style={{height: "130px"}}/>
          </a>
          </div>
          <div className="row bg-gray justify-content-center mx-auto  pt-1 mb-0 "style={{}}>

          <h2 className="text-purple text-center mb-0">Arshidny Portal | بوابة أرشدني </h2>
          </div>
        
        <Navbar collapseOnSelect expand="lg" className="bg-gray  ">
          {/* <Navbar.Brand href="#home"><img src={"/static/media/ArshidnyLogo.png"} alt="" /></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="mr-auto justify-content-center mx-auto ">

            
             
            
              {/* <NavDropdown title="نادي الطلاب" id="collasible-nav-dropdown" className="" style={{fontSize: "1.2em"}}>
                <NavDropdown.Item href="#action/3.1" className="text-right"> أندية الكليات</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="text-right">
                  اندية متخصصة
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3" className="text-right">
                  برامج كبرى
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="text-right">
                 مبادرات
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown title="التخصصات" id="collasible-nav-dropdown" className="" style={{fontSize: "1.3em"}}>
                <NavDropdown.Item disabled href="#action/3.1" className="text-right"><i class="fas fa-tools"></i> الطب البشري</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.2" className="text-right">
                <i class="fas fa-tools"></i> طب الأسنان
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.3" className="text-right">
                <i class="fas fa-tools"></i>  الصيدلة الإكلينيكية
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.4" className="text-right">
                <i class="fas fa-tools"></i>  العلوم الطبية التطبيقية
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.4" className="text-right">
                <i class="fas fa-tools"></i>  المعلوماتية الصحية
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.2" className="text-right">
                <i class="fas fa-tools"></i>  التمريض
                  </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="التحضيري" id="collasible-nav-dropdown" className="" style={{fontSize: "1.2em"}}>
                <NavDropdown.Item href="#/first-year" className="text-right"> السنة الأولى</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled href="#action/3.2" className="text-right">
                <i class="fas fa-tools"></i> السنة الثانية
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ما قبل الدراسة" id="collasible-nav-dropdown" className="" style={{fontSize: "1.2em"}}>
                <NavDropdown.Item href="#/interviews" className="text-right">المقابلات </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/medical-exam" className="text-right">
                  الفحص الطبي
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/intro" className="text-right">
                  الأيام التعريفية
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/uniform" className="text-right">
                  الزي الرسمي
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/kheir" className="text-right">
                  بداية خير
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="عن الجامعة" id="collasible-nav-dropdown" className="" style={{fontSize: "1.2em"}}>
                <NavDropdown.Item href="#/general-info"  className="text-right">معلومات عامة</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/acceptance" className="text-right">
                  القبول
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/FAQ"className="text-right">
                  اسئلة شائعة
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/contact"className="text-right">
                  تواصل مع الجامعة
                </NavDropdown.Item>
              </NavDropdown>
              
              
              
              
              
              <Nav.Link href="/#" className="" style={{fontSize: "1.2em"}}>الصفحة الرئيسية</Nav.Link>
              {isAuthenticated ? authLinks : null}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
