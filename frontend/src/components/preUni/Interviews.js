import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";



export class Interviews extends Component {


  render() {
    return (
      <div className="container">
        <h1 className="text-center text-red mt-4 mb-5 ">المقابلات</h1>



          <div className="row">
          <h3 className="d-block ml-auto text-blue ">نبذة عن المقابلات</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          المقابلة الشخصية هي إجراء روتيني يتم في كلية العلوم والمهن الصحية ويتم فيه السؤال عن بعض الأسئلة العامة والمؤهلات الدراسية ورغبة الطالب، ويتم فيها كذلك تسليم الوثائق المطلوبة، ويعد اجتياز المقابلة الشخصية بمثابة القبول الرسمي في الجامعة
          </span>
        <hr className="mt-3"/>

        <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">المستندات المطلوب إحضارها</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          عدد 2 صور من الشهادة الثانوية العامة بالإضافة الى سجل الدرجات لخريجين نظام المقررات •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          عدد 4 صور شخصية 4*6 •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          عدد 3 صور من الهوية الوطنية مع الأصل للمطابقة •
          </span>
          
      <hr className="mt-3"/>
        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2 ">التسلسل الزمني</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          القبول المبدئي للطالب عبر بوابة القبول الموحد •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          تحديد مواعيد المقابلات النصية والتي ستكون خلال عدة أيام •
          </span>

          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          الحضور لكلية العلوم والمهن الصحية خلال يوم المقابلة وتعبئة البيانات وتسليم المستندات والتي سيتم ذكرها برسالة نصية بعد القبول المبدئي •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          الانتظار لحين موعد المقابلة بعد تسليم المستندات •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          دخول المقابلة والتي سيتم إجراؤها من قبل شخص أو شخصين، وتتركز المقابلة غالبًا على أسئلة عامة عن الطالب مثل التفاصيل الدراسية وسبب اختياره الجامعة ورغبته المستقبلية •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          استلام إشعار القبول •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-5">
          حضور محاضرة تعريفية •
          </span>
          

        </div>
    );
  }
}

export default Interviews;
