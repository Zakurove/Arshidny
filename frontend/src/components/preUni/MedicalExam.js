import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";



export class MedicalExam extends Component {


  render() {
    return (
      <div className="container">
        <h1 className="text-center text-red mt-4 mb-5 ">الفحص الطبي</h1>



          <div className="row">
          <h3 className="d-block ml-auto text-blue ">الموقع</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          في مبنى مركز تنمية المهارات السريرية
          </span>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >

              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/Y45HYNYPn332 "
              >
                                 (اضغط هنا الموقع)
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
                
              </a>{" "}
             
            </span>
          </div>

{/* 
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          <a rel='noopener noreferrer' href='https://goo.gl/maps/Y45HYNYPn332'> https://goo.gl/maps/Y45HYNYPn332</a>
            
          </span> */}

        <hr className="mt-3"/>

        <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">الوقت</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         بعد المقابلات الشخصية, وسيتم تحديد اليوم والوقت عن طريق رسالة نصية تصل من الجامعة
          </span>
          
      <hr className="mt-3"/>
        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-2 ">الآلية</h3>
          </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         ستكون على ستة مراحل
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          هي التوجه إلى الاستقبال واستلام البطاقة الطبية  •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          الذهاب لغرفة انتظار الفحص الطبي •
          </span>

          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
          وفي هذه الأثناء سيتم تعبئة بعض الأوراق المتعلقة بالتاريخ الصحي •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
        التوجه لغرفة الفحص الأولى (الممرض), وتؤخذ المؤشرات الصحية والتي هي ضغط الدم والحرارة, وكذلك سيتم قياس الطول والوزن •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
           الانتقال لغرفة الفحص الثانية (الدكتور), ويتم الإجابة على بعض الأسئلة الطبية, وأخذ التاريخ المرضي •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         التوجه لغرفة انتظار فحص الدم, تؤخذ بعض عينات الدم للقيام بالتحاليل المعنية •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-5">
          حضور محاضرة تعريفية •
          </span>
          <hr className="mt-3"/>
          <div className="row">
        <h3 className="d-block ml-auto text-blue mt-2">ملاحظات مهمة</h3>
        </div>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         سيتواجد طلاب أرشدني طوال فترة الفحص للتنظيم والإجابة على جميع التساؤلات •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         يجب إحضار الهوية الوطنية •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
         فترة الفحص ثلاثة ساعات تقريباً •
          </span>
          <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-3">
         النتائج تخرج بعد اسبوع او اسبوعان, وبالإمكان استعراض النتيجة عن طريق تطبيق "خدمات المرضى" التابع لمستشفى الحرس الوطني •
          </span>

        </div>
    );
  }
}

export default MedicalExam;
