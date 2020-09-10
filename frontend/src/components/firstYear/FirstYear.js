import React, { Component, Fragment } from "react";
import FirstSem from "./FirstSem";
import SecondSem from "./SecondSem";
import { connect } from "react-redux";

export class FirstYear extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isFirstSem: false,
          isSecondSem: false,
        };
        this.goFirstSem = this.goFirstSem.bind(this);
        this.goSecondSem = this.goSecondSem.bind(this);
        this.goBack = this.goBack.bind(this);
      }
    
      goFirstSem(event) {
        this.setState({ isFirstSem: true, isSecondSem: false });
      }
      goSecondSem(event) {
        this.setState({ isFirstSem: false, isSecondSem: true });
      }
      goBack(event) {
        this.setState({ isFirstSem: false, isSecondSem: false });
      }


  render() {

    const firstSemComp = (
             <Fragment>
             <FirstSem goSecondSem={this.goBack} />
              </Fragment>
              );
        const secondSemComp = (
             <Fragment>
             <SecondSem goFirstSem={this.goBack} />
              </Fragment>
              );

              
    return (
      <div className="container">

          <div className=" ">
        <h1 className="text-center text-red mt-4 mb-5">السنة التحضيرية الأولى</h1>
        
        <div className="row ">
          <h3 className="d-block ml-auto text-blue">مقدمة تعريفية بالسنة الأولى</h3>
        </div>

        <div className="row d-block">
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }} className="text-right mt-1 mb-2 d-block">
            {" "}
بسم الله الرحمن الرحيم
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.3em"}} className="text-right mt-1 d-block ">
            {" "}
            السلام عليكم ورحمة الله وبركاته
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mt-1 d-block">
            {" "}
            مبارك للجميع القبول في الجامعة ونتمنى ان تكون السنة الاولى جميلة للجميع
الموضوع عبارة عن نظرة عامة وشاملة للسنة الجامعية الاولى وهي السنة التحضيرية، مع المحاولة قدر الإمكان أن نتسم بالحيادية والموضوعية في شرح بعض المواد وتفصيل ما يحتاج التفصيل منها

          </span>
        </div>

        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mt-1 d-block">
            {" "}

حيث سيكون الفصل الاول عبارة عن كورس مكثف للغة الانجليزية، مع وجود مادة العرب والسلم، وسيتم ذكر تفاصيل اكثر لهذه المواد حين الضغط على "الفصل الأول" ادناه
وفي الفصل الثاني، ستتم اضافة المواد العلمية الى الخطة الاكاديمية بالاضافة الى مواد اللغة الانجليزية ومادة العرب، وفي الصفحات المخصصة سيتم ذكر تفاصيل كل مقرر

          </span>
        </div>
        <hr/>

        
        <div className="row ">
          <h3 className="d-block ml-auto text-blue">:نصائح عامة</h3>
        </div>

        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 mt-1 d-block">
            {" "}
            تنظيم الوقت مهم جدا لتحصيل العلم والدرجات-
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
            {" "}
            تحدي النفس، وعدم النظر في مستوى الاخرين، وهذه النقطة جدا مهمة، فيجب عليك ان تتحدى نفسك، وان تتحدى الظروف المحيطة بك-
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}لكي تكون المحصلة العلمية وايضا من ناحية الدرجات عالية
          </span>
        </div>


        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
            {" "}
            أوقات مستقطعة للراحة ضرورة- </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
     لأن الإرهاق يؤثر في مستواكم الدراسي لذلك استقطعوا لكم 10د واقضوها بين أهليكم وأمور بيتكم وعبادتكم وتواصلكم مع اصحابكم، أهم ما فيه هذه النقطة إنكم تقضون استراحتكم بمكان وأموركم الدراسية اتركوها بمكان، الابتعاد عنها يخفف عنكم، لا تظلـوا (عندها) حتى يصيبكم الملل، بل جددوا نشاطكم واشحنـوا طاقتكم في هذه الاستراحات القصيرة المفيدة
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right  d-block">
            {" "}
     أنصح بقراءة أذكار الصباح بشكل يومي حتى تمد بشعور معية المولى عز وجل، و تناول الإفطار (الصحي) والنوم بشكل كاف مثلًا ساعتين بعد الجامعة- 
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            وخمس أو ست ساعات ليلًا حتى تحافظوا على لياقتكم الذهنية          </span>
        </div>



        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            :الدعاء في كل وقت أول أسباب النجاح. واقرأوا بعض الأدعية أثناء كتابة معلوماتك وقت الامتحان-
          </span>
        </div>

        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            رب أدخلني مدخل صدق وأخرجني مخرج صدق واجعل لي من لدنك سلطانًا نصيرًا •
          </span>
        </div>
        
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            حسبي الله لا إله إلا هو عليه توكلت و هو رب العرش العظيم •
          </span>
        </div>
        
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-3 d-block">
            {" "}
            اللهم لا سهل إلا ما جعلته سهلًا. وغيرها من الأدعية التي تثبت قلبك وتعينك في أمورك كلها بإذن الله. (جزى الله من سنّ مثل هذه السنة ونشرها خير الجزاء) •
          </span>
        </div>



        
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            الثقة بالنفس والاعتماد عليها في جميع شؤونكم الدراسية والحياتية منها يصنع منك شخصية متميزة و غير متكلة-
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            المجموعات الدراسية: جيدة للمراجعة وليس للمذاكرة الأولية-
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right d-block">
            {" "}
            التوكل على الله والهمة والعزيمة والصبر واختيار الأشخاص الداعمين والمشجعين لك في حالة إحباطك أمور أعتبرها العمود الفقري- 
          </span>
        </div>
        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            للنهوض بعد الفشل أو حتى الاستمرار في التميز
          </span>
        </div>


        <div className="row d-block">
          <span style={{ fontSize: "1.2em" }} className="text-right mb-2 d-block">
            {" "}
            ما خاب من استشار وسأل. لا تترددوا في البحث عن المشورة وأخذها من أهل التجربة والنظرة العميقة ممن سبقك في ميدان الحياة أو العلم-
          </span>
        </div>
            
            </div>
          
          <hr/>


            <div className="row mb-5 mt-5">

            <a
          style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
          onClick={(e) => {
            this.goFirstSem();
            event.preventDefault();
          }}
          href="#"
          className="d-block btn btn-block btn-outline-info "
        >
          <h3 className="d-block mx-auto  text-center">
            الفصل الأول{" "}
          </h3>
        </a>

        <a
          style={{ whiteSpace: "nowrap", fontSize: "1.2em" }}
          onClick={(e) => {
            this.goSecondSem();
            event.preventDefault();
          }}
          href="#"
          className="d-block btn btn-block btn-outline-info "
        >
          <h3 className="d-block mx-auto  text-center">
            الفصل الثاني{" "}
          </h3>
        </a>
            </div>


          {this.state.isFirstSem ? firstSemComp: ""}
          {this.state.isSecondSem ? secondSemComp: ""}



      </div>
    );

      
  }
}

export default FirstYear;
