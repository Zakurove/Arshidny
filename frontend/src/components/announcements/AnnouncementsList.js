import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  getAnnouncements,
  deleteAnnouncement,
} from "../../actions/announcements.js";
import AddAnnouncement from "./AddAnnouncement.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export class AnnouncementsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdating: true,
      isCreating: false,
      selectedAnnouncementId: null,
      selectedAnnouncement: null,
      images: [{image:"http://127.0.0.1:8000/static/media/ArshidnyPlaceHolder.jpg", id: 'base1'},],
      index: 0,
      currentSlide: 0,
    };
    this.backToList = this.backToList.bind(this);
  }
  rendering() {
    if (this.state.isUpdating == true) {
      this.setState({
        isUpdating: false,
      });
      this.props.getAnnouncements();
    }
    this.backToList = this.backToList.bind(this);
  }

  static propTypes = {
    announcements: PropTypes.array.isRequired,
    getAnnouncements: PropTypes.func.isRequired,
    deleteAnnouncement: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };
  componentDidMount() {
    this.props.getAnnouncements();
  }
  backToList(event) {
    this.setState({ isCreating: false, isUpdating: true });
    this.props.getAnnouncements();
  }
  render() {
    const newItem = (
      <div className="col-3">
        <button
          className="btn btn-info bg-blue ml-auto d-block text-right"
          onClick={(e) => {
            this.setState({
              isCreating: true,
            });
          }}
        >
          إضافة اعلان
        </button>
      </div>
    );

    // const deleteItem = (
    //   <div className="col-3">
    //     <button
    //       onClick={(e) => {
    //         this.props.deleteAnnouncement(announcement.id);
    //       }}
    //       className="btn btn-danger btn-block"
    //     >
    //       <i class="far fa-trash-alt"></i>
    //     </button>
    //   </div>
    // );
    
    // const deleteItem1 = (<div className="col-3">); </div>
    // const deleteItem2 = (</div>);
    
    if (this.state.isCreating) {
      return (
        <Fragment>
          <AddAnnouncement backToList={this.backToList} />
        </Fragment>
      );
    }
    const { user } = this.props.auth;
    {
      this.rendering();
    }
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="row">
              <div className="col">
                <span
                  className="d-block mx-auto text-red text-center"
                  style={{ fontSize: "2.5em" }}
                >
                  الإعلانات
                </span>{" "}
              </div>

              {user ? newItem : ""}
            </div>
          </div>
        </div>
        {/* border: "solid #493150"  */}
        <div className="row mr-5 ml-5" style={{ }}>
 
          <div className="col-6 pr-0 ">
            <Carousel
              selectedItem={this.state.currentSlide}
              onChange={this.updateCurrentSlide}
              useKeyboardArrows={true}
              swipeable={true}
              emulateTouch={true}
              swipeScrollTolerance={0}
              infiniteLoop={true}
              autoPlay={false}
              showThumbs={false}
              dynamicHeight={true}
            >
              {this.state.images.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={(e) => {
                    this.setState({
                      selectedImageId: slide.id,
                    });
                    this.handleOverlay(e);
                  }}
                  style={{ pointerEvents: "all" }}
                >
                  <img
                    index={this.state.index}
                    src={slide.image}
                    style={{
                      maxHeight: "500px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div
            className="col-6 " id="style-1"
            style={{ maxHeight: "500px", overflow: "auto" }}
          >
            <p></p>
            <table className="table table-striped">
              <tbody>
                {this.props.announcements.map((announcement) => (
                  <tr key={announcement.id}>
                    <td>
                      <div className="row">
                        <div className="col">
                          <a
                            className="text-center mx-auto d-block text-blue"
                            style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
                            onClick={(e) => {
                              this.setState({
                                selectedAnnouncementId: announcement.id,
                                selectedAnnouncement: announcement,
                                images: announcement.images,
                                currentSlide: 0,
                              });
                              event.preventDefault();
                            }}
                            href="#"
                          >
                            {announcement.title}
                          </a>
                        </div>
                        
                        { user ? (
                          <button
                            onClick={(e) => {
                              this.props.deleteAnnouncement(announcement.id);
                            }}
                            className="btn btn-danger mr-3 d-block"
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                          
                        ) : (
                          ""
                        )}
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // the first one is whatever we're getting so it's okay, the 2nd one is the name of the reducer, the 3rd the state in the reducer
  announcements: state.announcements.announcements,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getAnnouncements,
  deleteAnnouncement,
})(AnnouncementsList);
