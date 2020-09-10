import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";

export class Intro extends Component {
  render() {
    return (
      <div className="container mb-5">
        <h1 className="text-center text-red mt-4 mb-5 ">بداية خير</h1>

        <div className="row">
          <h3 className="d-block ml-auto text-blue ">الموقع</h3>
        </div>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          مركز المؤتمرات (البرج الإداري) لجامعة الملك سعود بن عبدالعزيز للعوم
          الصحية
        </span>

        <div className="row">
          <span
            style={{ fontSize: "1.2em" }}
            className="text-right d-block ml-auto"
          >
            (اضغط على علامة الموقع)
            <a
              rel="noopener noreferrer"
              href="https://goo.gl/maps/ZAco11y8v1ydZ6fN7 "
            >
              {" "}
              <i
                className="fas fa-map-marked-alt text-blue mr-2 mt-1"
                style={{ fontSize: "1.5em" }}
              ></i>
            </a>{" "}
          </span>
        </div>

        <hr className="mt-3" />

        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2">الوقت</h3>
        </div>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          بعد المقابلات الشخصية, وسيتم تحديد اليوم والوقت عن طريق رسالة نصية تصل
          من الجامعة
        </span>

        <hr className="mt-3" />

        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2">:الزي الرسمي</h3>
        </div>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">
        سكرّب أزرق اللون (إلزامي)
        </span>

        <hr className="mt-3" />

        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2">:عن الحفل</h3>
        </div>
        <div className="row">
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">
        تُطلق عمادة شؤون الطلاب بالجامعة بداية كل سنة احتفالاً بعنوان (بداية خير) تهنئ فيه طلابها المستجدين ،  والذي يهدف  إلى تعريف الطلاب المستجدين  بالجامعة والبيئة الأكاديمية، بالإضافة إلى تعريفهم بالمناهج الدراسية المقررة في الجامعة وأساليب التدريس فيها والتحدث عن حاجز اللغة الإنجليزية وذلك لتوضيح الطريقة الأمثل لتجاوز اللغة الإنجليزية بالإضافة إلى مبانيها ومراكزها البحثية، والخدمات التي توفرها الجامعة لطلابها
        </span>
        </div>
        <div className="row">
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">
        كما سيحتوي البرنامج على أركان تعريفية ، تثريها الأندية المتخصصة مثل نادي لين( للأعمال التطوعية )،  نادي الفنون ( لتطوير الفنون وإبراز المواهب )،  بصيرة ( يهتم بالوعي الفكري ) وأندية الكليات بالإضافة لأرشدني ( الذي يهتم بتلبية احتياجات الطلبة المستجدين ) وبوابة إنجاز وعدد من أبرز الخدمات الجامعية </span>
        </div>

      </div>
    );
  }
}

export default Intro;
