import React, { Component, Fragment } from "react";
import AnnouncementsList from "../announcements/AnnouncementsList.js";
import { connect } from "react-redux";

export class Uniform extends Component {
  render() {
    return (
      <div className="container mb-4">
        <h1 className="text-center text-red mt-4 mb-5 ">الزي الرسمي</h1>
        <div className="row border p-2">
          <div className="col-8">
            <div className="row">
              <span
                style={{ fontSize: "1.2em" }}
                className="text-right d-block"
              >
                الزي الرسمي: هو الزيّ او اللبس الموحد في الجامعة و الواجب الحضور
                به في جميع الايام الدراسية
              </span>
            </div>
            <div className="row">
              <span
                style={{ fontSize: "1.2em" }}
                className="text-right d-block mb-2 mt-2"
              >
                الزي الرسمي في جامعه الحرس هو السكرَب (الزي الطبي) و اللاب كوت ،
                و لون السكرَب يجب ان يكون من درجات اللون الازرق ( سماوي ، ازرق ،
                ازرق غامق){" "}
              </span>{" "}
            </div>
            <div className="row">
              <span
                style={{ fontSize: "1.2em" }}
                className="text-right d-block mb-2"
              >
                ملاحظة: اللاب كوت يجب لبسه فقط في المختبرات و ليس ضروري في
                الايام التي لا يوجد بها حصص مختبرات ، نظراً بأن حصص المختبرات
                تبدأ بالفصل الدراسي الثاني ، فلذلك لستم بملزومين باللاب كوت في
                الفصل الدراسي الاول{" "}
              </span>
            </div>
            <div className="row">
              <span
                style={{ fontSize: "1.2em" }}
                className="text-right d-block ml-auto"
              >
                يبدأ وجوب الحضور بالسكرَب ( الزي الطبي ) من حفل بداية خير
              </span>
            </div>
          </div>
          <div className="col-4">
            <img
              src={"/static/media/scrub.jpg"}
              className=""
              alt=""
              style={{ height: "180px" }}
            />
            <img
              src={"/static/media/labcoat.jpg"}
              className="mt-1"
              alt=""
              style={{ height: "180px" }}
            />
          </div>
        </div>

        <hr />
        <div className="row mb-2">
          <h2 className="d-block mx-auto text-blue mt-2 mb-2">
            مواقع لشراء السكرب و اللاب كوت
          </h2>
        </div>

        <div className="border p-2 pr-4">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (L'AMI Cherokee) لامي شيروكي ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: هم الأغلى بالسوق، لكن الخامة تستحق-
            </span>
          </div>

          {/* <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a rel="noopener noreferrer" href="http://ww12.lami-medical.com/">
                {" "}
                Lami-Medical.com
              </a>{" "}
              :المتجر الإلكتروني-
            </span>
          </div> */}

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز: 230 ريال إلى 350 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت: 150 ريال إلى 260 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي الزهراء - شارع صلاح الدين الأيوبي, مقابل مستشفى قوى
              الأمن
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                 (اضغط على علامة الموقع)
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/2HdDLaMikG3Zb28A6 "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
                
              </a>{" "}
             
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em"}}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0114763641-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Medical Outfit) المظهر الطبي ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: عندهم ماركات عالمية مشهورة وجودتهم جداً عالية
              وتستاهل-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a rel="noopener noreferrer" href="https://shop.medicaloutfit.com/">
                {" "}
                Shop.MedicalOutfit.com
              </a>{" "}
              :المتجر الإلكتروني-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز: 150 ريال إلى 330 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت: 150 ريال إلى 400 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - شارع التخصصي - مجمع سياحية مول
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/HVnFuRNMPdtfMu9s8  "
              >
                {" "}
                
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mt-2"
            >
              الرياض - طريق الملك عبدالله - مجمع يورومارشيه
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/WEyM1qN9YyXKKJhJ8  "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0110449971-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Dr.s' Lounge) دكتورز لاونج ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: تقريباً عندهم ١٢ ماركة عالمية مشهورة، تعاملهم جداً
              جميل-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز: 130 ريال إلى 630 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت: 210 ريال إلى 900 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي الياسمين
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/oF3VxBL3p2XQy13L6   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mt-2"
            >
              الرياض - حي السليمانية - شارع الأمير سلطان
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/KG4Qk2zAceZP8GnD6   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0114724141-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Scrubser) سكربزر ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: هذا المتجر جميل وأصحابه شباب من جامعة الحرس. يعتبر
              المتجر وكيل لثمانية ماركات أمريكية شهيرة جاهزة
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              بالإضافة، عندهم فكرة حلوة عبارة عن بطاقة تسمى "الولاء لسكربزر"
              تعطيك خصومات توصل لـ ٪40
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز: 165 ريال إلى 440 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت: 170 ريال إلى 650 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي المصيف - شارع ظبية بنت البراء
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/nEEwSyLsEQ7ph3yH9"
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0566292585-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Scrub-n) سكرب ان ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: المتجر هذا أيضاً يجيب ماركات أمريكية عالمية جاهزة
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز: 280 ريال إلى 400 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت: 225 ريال إلى 280 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي السليمانية - طريق الأمير سلطان - مجمع أسواق التميمي
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/XGwcnKf3DzoyND718   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0541966663-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mt-2"
            >
              حي الحمراء - طريق الملك عبدالله - مجمع مكتبة جرير
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/irJNwDstvG6QAZh59   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0509934982-
            </span>
          </div>
        </div>
      
        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (OXYGEN) اوكسجين ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: اللي يفكر يفصل، يعتبر هذا المتجر أفضل الموجود بشهادة الكثير- 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              ملاحظة: التفصيل في فرع طريق الملك عبد الله فقط
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز الجاهزة: 95 ريال إلى 160 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت الجهازة: 60 ريال إلى 105 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي صلاح الدين -طريق الملك عبدالله مع تقاطع الملك عبدالعزيز
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/XovHdiinXVvU1BZN9   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0114507284-
            </span>
          </div>

      
      
        <div className="row mt-2">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي السليمانية -شارع أبو بكر الرازي 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/TbTjiJPhdQ3Xm1Jz6   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0114726041-
            </span>
          </div>
        
      
        <div className="row mt-2">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
             الرياض - حي الروضة -شارع الحسن بن علي 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/rkJiMmBBANXW8LKL9    "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0114456072-
            </span>
          </div>
        </div>
      
        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Doctor Sam) دكتور سام  ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: يعتبر من المحلات اللي تفصل السكربز في الرياض عندهم تشكيلة أقمشتهم جيدة وتعاملهم جميل-
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز الجاهزة: 100 ريال إلى 350 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز التفصيل: 290 ريال إلى 450 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت الجاهز: 50 ريال إلى 300 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت التفصيل: 200 ريال إلى 350 ريال-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - طريق الإمام عبدالله 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/V673zo8W2xEihvX7A   "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0591889909 - 0561656366-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              (Scrub Code) سكرب كود  ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              نظرة في المتجر: كذلك هذا المحل وكيل لعدد من الماركات المشهورة وعنده تشكيلة متنوعة من الموديلات والألوان
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار السكربز : 250 ريال إلى 380 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              أسعار اللاب كوت : 150 ريال إلى 315 ريال-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :الفروع-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي الازدهار - شارع عثمان بن عفان
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/QmzBtyDs9jBFUyKY6    "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              رقم الهاتف: 0118103897-
            </span>
          </div>
        </div>

        <div className="border p-2 pr-4 ">
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right text-green d-block ml-auto"
            >
              :شوارع تشتهر بوجود متاجر كثيرة لبيع الزي الطبي ◾
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي السليمانية - شارع أبو بكر الرازي
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/oXfnzAFhE6yyLxZu8  "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>

          <div className="row mt-2">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              الرياض - حي الديرة - شارع الملك فيصل
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              <a
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/vWtq6i693uKjbS62  "
              >
                {" "}
                <i className="fas fa-map-marked-alt text-blue mr-2 mt-1" style={{fontSize: '1.5em'}}></i>
              </a>{" "}
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              من ناحية الماركات كل شخص وله ذوقه الخاص، ولولا اختلاف الأذواق لبارت السلع، لذلك يجب عليك معاينة الماركات بنفسك لتحديد الأنسب والأريح لك
            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mt-2 mb-2"
            >
              تذكير: ألوان السكربز المسموح بها في الكلية هي درجات اللون الأزرق فقط
            </span>
          </div>
        </div>


      </div>
    );
  }
}

export default Uniform;
