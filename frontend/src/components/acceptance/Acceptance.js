import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import PropTypes from "prop-types";
import MaleAcceptance from "./MaleAcceptance";
import FemaleAcceptance from "./FemaleAcceptance";

export class Acceptance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMale: false,
      isFemale: false,
    };
    this.goMale = this.goMale.bind(this);
    this.goFemale = this.goFemale.bind(this);
  }

  goMale(event) {
    this.setState({ isMale: true, isFemale: false });
  }
  goFemale(event) {
    this.setState({ isMale: false, isFemale: true });
  }
  render() {
    if (this.state.isMale) {
      return (
        <Fragment>
          <MaleAcceptance goFemale={this.goFemale} />
        </Fragment>
      );
    }
    if (this.state.isFemale) {
      return (
        <Fragment>
          <FemaleAcceptance goMale={this.goMale} />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <h1 className="text-center text-red mt-3 mb-4">القبول</h1>
        <hr />

        <a
          style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
          onClick={(e) => {
            this.goMale();
            event.preventDefault();
          }}
          href="#"
        >
          <h3 className="d-block mx-auto text-green text-center">
            معايير قبول الطلاب{" "}
          </h3>
        </a>

        <a
          style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
          onClick={(e) => {
            this.goFemale();
            event.preventDefault();
          }}
          href="#"
        >
          <h3 className="d-block mx-auto text-green text-center">
            معايير قبول الطالبات{" "}
          </h3>
        </a>
      </Fragment>
    );
  }
}

export default Acceptance;
