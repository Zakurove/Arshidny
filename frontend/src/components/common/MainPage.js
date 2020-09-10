import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export class MainPage extends Component {
  render() {
    const renderTooltip1 = (props) => (
      <Tooltip id="button-tooltip1" {...props}>
        Blackboard LMS
      </Tooltip>
    );
    const renderTooltip2 = (props) => (
      <Tooltip id="button-tooltip2" {...props}>
        Student Information System
      </Tooltip>
    );
    const renderTooltip3 = (props) => (
      <Tooltip id="button-tooltip3" {...props}>
        AWN Service Delivery System 
      </Tooltip>
    );
    const renderTooltip4 = (props) => (
      <Tooltip id="button-tooltip4" {...props}>
        Reset University Password
      </Tooltip>
    );

    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid mb-2">
          <div className="container">
            <h1 className="display-4 text-right text-purple">أرشدني</h1>
            <p className="lead d-block ml-auto text-purple text-right">
            <i class="fas fa-wrench"></i>   كلام رهيب عن أرشدني وعائلة ارشدني وانها تهدف لمساعدة الطلاب وكذا
            </p>
          </div>
        </div>


        <div className="container ">
          <ul
            className="list-unstyled list-inline text-center"
            style={{ fontSize: "1.2em" }}
          >
            <li className="list-inline-item mx-3">
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip1}
              >
                <a href="https://lms.ksau-hs.edu.sa/">
                  <img
                    src={"/static/media/BlackBoard.png"}
                    className=""
                    alt=""
                    style={{ height: "95px" }}
                  />
                </a>
              </OverlayTrigger>
            </li>

            <li className="list-inline-item mx-3">
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip2}
              >
                <a href="https://sis.ksau-hs.edu.sa/psp/ps/?cmd=login&languageCd=ENG&">
                  <img
                    src={"/static/media/SiSNew.png"}
                    className=""
                    alt=""
                    style={{ height: "95px"}}
                  />
                </a>
              </OverlayTrigger>
            </li>
            <li className="list-inline-item mx-3">
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip3}
              >
                <a href="https://awn.ksauhs.com/">
                  <img
                    src={"/static/media/AWN.png"}
                    className=""
                    alt=""
                    style={{ height: "100px" }}
                  />
                </a>
              </OverlayTrigger>
            </li>
            <li className="list-inline-item mx-3">
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip4}
              >
                <a href="https://prset.ksau-hs.edu.sa/showLogin.cc">
                  <img
                    src={"/static/media/Reset.png"}
                    className=""
                    alt=""
                    style={{ height: "90px", width: "85px" }}
                  />
                </a>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
        <hr/>
        <div className="container">
          <div className="mt-3 mb-5">
            <AnnouncementsList />
          </div>
        </div>
        <hr/>
        
      </Fragment>
    );
  }
}

export default MainPage;
