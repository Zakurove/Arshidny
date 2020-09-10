import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";



export class FemaleAcceptance extends Component {
    static propTypes = {
        goMale: PropTypes.func.isRequired,
      };
  render() {
    return (
        <div className="container">
        

        <a
          style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
          onClick={(e) => {
            this.props.goMale();
            event.preventDefault();
          }}
          href="#"
        >
          <h4 className="d-block mx-auto text-red text-right mt-2">
            (معايير قبول الطلاب){" "}
          </h4>
        </a>
        <h1 className="text-center text-red mt-3 ">معايير قبول الطالبات</h1>
        <hr/>
      <h3 className="d-block mx-auto text-blue text-center">معايير القبول لدرجة البكالوريوس (طالبات – الرياض) للعام الجامعي 1442هـ </h3>
        <h4 className="d-block mx-auto text-blue text-center mt-3">مسار السنة التحضيرية للكليات الصحية– ومسار التمريض</h4>
        <hr/>
        <h4 className="d-block ml-auto text-green text-right">الشروط</h4>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">أن تكون المتقدمة سعودية الجنسية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">على المتقدمة لمسار السنة التحضيرية للكليات الصحية أن تكون حديثة التخرج لهذا العام 1441 هـ-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">على المتقدمة لمسار التمريض في كلية التمريض ألا يكون قد مضى على تخرجها أكثر من ثلاث سنوات أي خريجة أحد الأعوام التالية (1438-1439)هـ (1439-1440)هـ (1441)هـ-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">أن لا يقل المعدل التراكمي العام في الثانوية العامة علوم طبيعية عن %90-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">اجتياز المقابلة الشخصية للبرامج التي تتطلب ذلك واجتياز الكشف الطبي-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">التقدم لاختبار القبول للتخصصات العلمية للطالبات (التحصيلي) واختبار القدرات العامة (القياس) التي يقدمها المركز الوطني للقياس والتقويم في التعليم العالي-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">تعبئة نموذج طلب الالتحاق عن طريق موقع القبول الإلكتروني الموحد للطالبات في الجامعات الحكومية والكلية التقنية في منطقة الرياض-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">لا يسمح للمقبولين بالانسحاب بعد استلام اشعار القبول إلا بعد انتهاء فترة القبول وذلك في بداية السنة الأكاديمية-</span>
        <hr/>
        <h4 className="d-block ml-auto text-green text-right">الأنظمة المتعلقة بالقبول</h4>

        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">سيتم استبعاد الطلب في حالة عدم صحة البيانات المدخلة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">جميع الطلبات تكون عن طريق موقع القبول الإلكتروني الموحد للطالبات في الجامعات الحكومية والكليات التقنية في منطقة الرياض-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">عدم استكمال المتقدمة أي إجراء من إجراءات التقديم  في المواعيد المحددة يخرجها من المنافسة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">يكتب الاسم كاملاً باللغة العربية مطابقًا لشهادة الثانوية العامة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">يجب متابعة نتائج الترشيح حتى انتهاء فترة القبول وذلك من خلال رابط بوابة التقديم الموجود في حساب عمادة القبول والتسجيل على تويتر-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">ان تكون المتقدمة لائقة طبياً-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">:عند الترشيح للقبول يجب تزويد عمادة القبول والتسجيل بالمستندات التالية-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">صورة من شهادة الثانوية العامة •</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">صورة من الهوية الوطنية •</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">صور شخصية •</span>
        <hr/>
        <div className="row mt-4">
            <div className="col border  text-center" style={{ fontSize: "1.2em" }}>الرياض</div>
            <div className="col border  text-center" style={{ fontSize: "1.2em" }}> عام 1441هـ</div>
            <div className="col border  text-center" style={{ fontSize: "1.2em" }}>مسار السنة التحضيرية للكليات الصحية</div>
        </div>
        <div className="row mb-5">
            <div className="col border text-center" style={{ fontSize: "1.2em" }}>الرياض</div>
            <div className="col border  text-center">
                <span className="d-block mx-auto  text-center" style={{ fontSize: "1.2em" }}>عام 1439هـ - 1438هـ </span>
                <span className="d-block mx-auto  text-center" style={{ fontSize: "1.2em" }}>عام 1440هـ - 1439هـ </span>
                <span className="d-block mx-auto  text-center" style={{ fontSize: "1.2em" }}>عام 1441هـ </span>
                </div>
            <div className="col border  text-center" style={{ fontSize: "1.2em" }}>مسار التمريض</div>
        </div>
        <hr/>
        <h4 className="d-block ml-auto text-green text-right">:سيكون التنافس على المقاعد المتوفرة وفق المعايير التالية</h4>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">تمثل النسبة العامة في شهادة الثانوية العامة 30% من النسبة الموزونة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">تمثل درجة اختبار القدرات العامة 50% من النسبة الموزونة-</span>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">تمثل درجة الاختبار التحصيلي 20% من النسبة الموزونة-</span>
        <hr/>
        <h4 className="d-block ml-auto text-green text-right">:تحسب النسبة الموزونة المعتمدة للقبول في البرنامج كالآتي</h4>
        <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">(النسبة الموزونة =(نسبة الثانوية العامة × 0.30) + (درجة القدرات العامة × 0.50 ) + (درجة الاختبار التحصيلي × 0.20-</span>
            <hr/>
            <h4 className="d-block ml-auto text-green text-right">:مثال لحساب النسبة المركبة</h4>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">(طالبة نسبتها في الثانوية العامة (95.00-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1"> (ودرجتها في القدرات العامة (85.00-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">(وفي الاختبار التحصيلي (80.00-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">تمثل درجة الاختبار التحصيلي 20% من النسبة الموزونة-</span>
            <span style={{ fontSize: "1.2em" }} className="text-right d-block mb-1">%النسبة الموزونة = (95.00×0.30) + (85.00×0.50) + (80.00×0.20) = 87.00-</span>
    </div>
    );
  }
}

export default FemaleAcceptance;