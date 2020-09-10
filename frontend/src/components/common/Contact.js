import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";

export class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentContact: 1,
            contacts: [
                {
                    id: 1,
                    title: `كلية العلوم والمهن الصحية`,
                },
                {
                    id: 2,
                    title: `كلية  الطب`,
                },
                {
                    id: 3,
                    title: `كلية  الأسنان`,
                },
                {
                    id: 4,
                    title: `كلية  الصيدلة`,
                },
                {
                    id: 5,
                    title: `كلية  الصحة العامة والمعلوماتية الصحية`,
                },
                {
                    id: 6,
                    title: `كلية  العلوم الطبية التطبيقية`,
                },
                {
                    id: 7,
                    title: `كلية  التمريض`,
                },
                {
                    id: 8,
                    title: `عمادة القبول والتسجيل`,
                },
                {
                    id: 9,
                    title: `شؤون الطلاب`,
                },
                {
                    id: 10,
                    title: `عمادة شؤون الطلاب`,
                },
            
            ]
        };
      }



  render() {
    const contactOne = (
        <div
        className=" row  p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> COSHP-R@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95570-95510 :تحويلة</h5>
        <h5 className="text-blue text-center"> 95540 :مكتبة الكلية</h5>
        </div>
      </div>
      );
      const contact2 = (
          <div className="container">
        <div
        className=" row  px-3"
        style={{  height: "50%" }}
      >
        <div className='col-8 m-auto'>
        <h5 className="text-blue text-center"> COM@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95234 - 95137 :تحويلة الشؤون الأكاديمية</h5>
        <h5 className="text-blue text-center"> 95179-95172 :تحويلة شؤون الطلاب</h5>
        <h5 className="text-blue text-center"> 95160 :مكتبة الكلية</h5>
        </div>
        <div className="col-4 m-auto">
        <h3 className="text-blue text-center"> طلاب </h3>
        </div>
      </div>       
      <hr style={{margin: "0"}}/>
              <div
              className=" row  px-3 "
              style={{  height: "50%" }}
            >
              <div className='col-8 m-auto'>
              <h5 className="text-blue text-center"> COM-F@ksau-hs.edu.sa :بريد إلكتروني</h5>
              <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
              <h5 className="text-blue text-center"> 99692 - 99691 :تحويلة الشؤون الأكاديمية</h5>
              <h5 className="text-blue text-center"> 99714-99709 :تحويلة شؤون الطالبات</h5>
              </div>
              <div className="col-4 m-auto">
              <h3 className="text-blue text-center"> طالبات </h3>
              </div>
            </div>
            </div>
      );
      const contact3 = (
        <div
        className=" row p-3 "
        style={{  height: "100%" }}
      >
          <div className='col-12 my-auto'>
        <h5 className="text-blue text-center"> COD@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95768-95701 :تحويلة</h5>
        </div>
      </div>
      );
      const contact4 = (
        <div
        className=" row  p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> COP@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95029-95022-95049 :تحويلة</h5>
        <h5 className="text-blue text-center"> 95016 :مكتبة الكلية</h5>
        </div>
      </div>
      );
      const contact5 = (
        <div
        className=" row  p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> CPHHI@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95432-95441 :تحويلة</h5>
        <h5 className="text-blue text-center"> 95468 :مكتبة الكلية</h5>
        </div>
      </div>
      );
      const contact6 = (
        <div
        className=" row p-3 "
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> CAMS@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95185-95183 :تحويلة</h5>
        <h5 className="text-blue text-center"> 95125 :مكتبة الكلية</h5>
        </div>
      </div>
      );
      const contact7 = (
        <div
        className=" row  p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> CON-R.deanoffice@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 99402-99401 :تحويلة</h5>
        <h5 className="text-blue text-center"> 99416 :مكتبة الكلية</h5>
        </div>
      </div>
      );
      const contact8 = (
        <div
        className=" row  p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> ask_dar@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 95114 :تحويلة</h5>
        </div>
      </div>
      );
      const contact9 = (
        <div
        className=" row p-3 "
        style={{  height: "100%" }}
      >
          <div className='col-12 m-auto'>
        <h5 className="text-blue text-center"> studentaffairs-COSHP@ksau-hs.edu.sa :بريد إلكتروني</h5>
        </div>
      </div>
      );
      const contact10 = (
        <div
        className=" row p-3"
        style={{  height: "100%" }}
      >
          <div className='col-12 my-auto'>
        <h5 className="text-blue text-center"> Deanship_student_affairs@ksau-hs.edu.sa :بريد إلكتروني</h5>
        <h5 className="text-blue text-center"> +966-11-4299999 :هاتف</h5>
        <h5 className="text-blue text-center"> 995266-95466-95281 :تحويلة</h5>
        </div>
      </div>
      );
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <span
                  className="d-block mx-auto text-red text-center mb-5 mt-4"
                  style={{ fontSize: "2.5em" }}
                >
                  تواصل مع الجامعة
                </span>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-light p-3" style={{ border: "solid #1c6d8b", borderRadius: "25px" }} >
          <div className="col-sm-8 p-0"  style={{ borderLeft: "solid #1c6d8b", borderBottom: "solid #1c6d8b", borderTop: "solid #1c6d8b", borderRadius: "25px", backgroundColor: "#ebeced" }}>
              
                {this.state.currentContact == 1 ? contactOne : ""}
                  {this.state.currentContact == 2 ? contact2 : ""}
                  {this.state.currentContact == 3 ? contact3: ""}
                  {this.state.currentContact == 4 ? contact4 : ""}
                  {this.state.currentContact == 5 ? contact5 : ""}
                  {this.state.currentContact == 6 ? contact6 : ""}
                  {this.state.currentContact == 7 ? contact7 : ""}
                  {this.state.currentContact == 8 ? contact8 : ""}
                  {this.state.currentContact == 9 ? contact9 : ""}
                  {this.state.currentContact == 10 ? contact10 : ""}
          </div>
          <div
            className="col-sm-4 pl-4 "
            style={{ height: "100%" , borderRight: "solid #1c6d8b", borderBottom: "solid #1c6d8b", borderTop: "solid #1c6d8b", borderRadius: "25px" }}
          >
            <p></p>
            <table className="table-responsive table-striped">
              <tbody>
                {this.state.contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <div className="row">
                        <div className="col">
                          <a
                            className="text-center mx-auto d-block text-red"
                            style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
                            onClick={(e) => {
                              this.setState({
                                currentContact: contact.id,
                              });
                              event.preventDefault();
                            }}
                            href="#"
                          >
                            {contact.title}
                          </a>
                        </div>

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

export default Contact;
