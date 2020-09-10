import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";

export class GeneralInfo extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-red mt-4 mb-5">معلومات عامة</h1>
        
        <div className="row">
          <h3 className="d-block ml-auto text-blue">عن الجامعة</h3>
        </div>
        <div className="row">
          <span style={{ fontSize: "1.2em" }} className="text-right">
            {" "}
            هي جامعة حكومية متخصصة في العلوم الصحية وتحظى باعتماد وزارة التعليم
            في المملكة العربية السعودية لمختلف برامجها لمرحلتي البكالوريوس
            والدراسات العليا، وقد مثلت البرامج الأكاديمية في مدينة الملك
            عبدالعزيز الطبية، التابعة للشؤون الصحية بوزارة الحرس الوطني، النواة
            الأولى لها. ومع النمو المتسارع لهذه البرامج، وما أثمرت عنه من نتائج
            إيجابية في تأهيل كوادر سعودية في تخصصات الطب والعلوم الصحية، وجّه
            خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز – يرحمه الله – في
            الخامس من شهر صفر 1426هـ الموافق السادس من شهر مارس 2005م بإنشاء
            الجامعة، واسمها: "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية"،
            ومقرها الرئيس في الرياض ولها فرعين في كل من جدة والأحساء
          </span>
        </div>

        <hr/>

        <div className="row">
          <h3 className="d-block ml-auto text-blue mt-3">الكليات</h3>
        </div>
        <h5 className="text-right d-block text-green mt-2 mb-2">
          :تضم الجامعة أربع عشرة كلية في ثلاث مدن جامعية في الرياض وجدة والأحساء
        </h5>
            <h5 className="text-right d-block   mt-3 text-red">:سبع كليات في المدينة الجامعية بالرياض •</h5>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية الطب-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية طب الأسنان-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية الصيدلة-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية الصحة العامة والمعلوماتية الصحية-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم الطبية التطبيقية-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية التمريض-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم والمهن الصحية-</span>
            <h5 className="text-right d-block mt-4 text-red">:أربع كليات في المدينة الجامعية في جدة •</h5>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية الطب-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم الطبية التطبيقية-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية التمريض-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم والمهن الصحية-</span>
            
            <h5 className="text-right d-block mt-4 text-red">:ثلاث كليات في المدينة الجامعية في الأحساء •</h5>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم الطبية التطبيقية-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية التمريض-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block">كلية العلوم والمهن الصحية-</span>

            <hr/>

            <div className="row">
          <h3 className="d-block ml-auto text-blue mt-3">البرامج الدراسية</h3>
        </div>
        <h5 className="text-right d-block mt-3 text-red">:برامج الباكلوريوس •</h5>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block"> بكالوريوس الطب والجراحة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس طب الأسنان-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس الصيدلة الإكلينيكية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس المعلوماتية الصحية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس العلاج التنفسي-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس الخدمات الطبية الطارئة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس العلوم المختبرات الإكلينيكية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس العلاج الوظيفي-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس تقنية التخدير-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس علوم الأشعة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس كلية التغذية الإكلينيكية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">(بكالوريوس تقنية القلب (القسطرة القلبية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">بكالوريوس التمريض-</span>


        <h5 className="text-right d-block mt-4  text-red">:برامج الماجستير •</h5>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير التعليم الطبي  - كلية الطب-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير المعلوماتية الصحية - كلية الصحة العامة والمعلوماتية الصحية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير إدارة الأنظمة والجودة - كلية الصحة العامة والمعلوماتية الصحية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير الوبائيات والإحصاء الطبي - كلية الصحة العامة والمعلوماتية الصحية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير الصحة العامة - كلية الصحة العامة والمعلوماتية الصحية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block">ماجستير الأخلاقيات الحيوية – كلية الصحة العامة والمعلوماتية الصحية  بالتعاون مع مركز الملك عبدالله العالمي للأبحاث الطبية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-5">ماجستير علوم التمريض تخصص قبالة - كلية التمريض بالرياض-</span>




      </div>
    );
  }
}

export default GeneralInfo;
