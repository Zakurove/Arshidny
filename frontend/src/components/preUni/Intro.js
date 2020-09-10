import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";



export class Intro extends Component {


  render() {
    return (
      <div className="container mb-5">
        <h1 className="text-center text-red mt-4 mb-5 ">الأيام التعريفية</h1>



          <div className="row">
          <h3 className="d-block ml-auto text-blue ">الموقع</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          كلية العلوم والمهن الصحية
          </span>

        <hr className="mt-3"/>

        <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">الآلية</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
     :سيتم تقسيم الطلاب المستجدين على ثلاث أيام, كل طالب له الفرصة لحضور أحد هذه الأيام فقط، وكل يوم يمر بثلاثة مراحل
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          يبدأ اليوم بمحاضرة يلقيها ممثل شؤون الطلاب  •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          جولة تعريفية حول مبنى الكلية  •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          ينتهي اليوم باختبار تحديد مستوى اللغة الإنجليزية •
          </span>
      <hr className="mt-3"/>
        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2 ">أولاً, محاضرة شؤون الطلاب</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         هي محاضرة قصيرة هدفها تعريف الطلاب بأنظمة الجامعة وقوانينها, والاجابة على اسئلة الطلاب واستفساراتهم
          </span>
          <hr className="mt-3"/>
          <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">ثانياً, الجولة التعريفية</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          يقود فريق أرشدني الطلاب في جولة تعريفية حول مبنى الكلية لتعريفهم بمرفقات الكلية ومواقعها كالمصلى ومكتبة الجامعة
          </span>
          <hr className="mt-3"/>
          <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">ثالثاً, اختبار تحديد مستوى اللغة الإنجليزية</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          يفيد الجامعة في تقييم مستوى التدريس، حيث سيقام اختبار آخر في نهاية العام الدراسي لقياس مدى تحسن اللغة عند الطلاب، ولا يؤثر في عملية القبول بالجامعة أو الجدول الدراسي
          </span>
        </div>
    );
  }
}

export default Intro;