import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";



export class SecondSem extends Component {
    static propTypes = {
        goFirstSem: PropTypes.func.isRequired,
      };
  render() {
    return (
        <div className="container">


        <h1 className="text-center text-red mt-3 mb-3 ">الفصل الثاني من السنة الأولى</h1>
        <hr/>
        





    <div className="row">
            <h2
              className="text-red d-block mx-auto"
            >
              Grammer
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ENGL 102 / English Grammar II
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
              1-Betty Schrampfer Azar, Fundamentals of English Grammar, Fourth Edition Chapters 6, 7, 10, 11 [Sections 11-1 to 11-9], 12 & 13 [Sections 13-1 to 13-8]

            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              2- Azar and Hagen, Fundamentals of English Grammar Workbook, Fourth Edition, Chapters 6, 7, 10, 11 [Sections 11-1 to 11-9], 12 & 13 [Sections 13-1 to 13-8]

            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
               ساعتان اكاديمية
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربعة ساعات فعلية
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
تعتبر مادة القرامر هذا الترم اسهل من الترم الأول، كما انها من اسهل مواد هذا الترم     
       </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :تدرس المادة من نفس كتاب السمستر الاول وتتناول المواضيع التالية 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 6: nouns and pronouns
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               Chapter 7: modal auxiliaries 
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 10: the passive
             </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 11: count/noncount nouns and articles
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 12: adjective clauses
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                Chapter 13: gerunds and infinitives
             </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                :المصادر الرئيسية للدراسة

                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                الكتاب الرئيسي-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                كتاب النشاط-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                Peter's Notes-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                وهي عبارة عن شرح كامل لمحتوى الكتاب من وجهة نظر              
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                  (رئيس قسم اللغة الإنجليزية في جامعة الملك سعود بن عبدالعزيز للعلوم الصحية فرع الرياض) Mr.Peter      
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :المصادر الفرعية للدراسة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                يوتيوب (يوجد شرح بالعربي وشرح بالانجليزي)
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                :اهم قناتين تقدم شرح قواعد اللغة الانجليزية باللغة العربية
            </span>
          </div>
          <div className="row">
            <a
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
              href="https://www.youtube.com/c/DroosOnline4u"
            >
                (قناة (دروس اونلاين-
            </a>
          </div>
          <div className="row">
            <a
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
              href="https://www.youtube.com/c/ZAmericanEnglish"
            >
               (zAmericanEnglish) قناة-
            </a>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                مذاكرة القاعدة في الكتاب الرئيسي مع حل التمارين-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
              Peter's Notes مراجعة القاعدة من-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
         حل جميع التمارين المتعلقة بالقاعدة بكتاب التمارين-
            </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
       حل جميع التمارين المتعلقة بالقاعدة بكتاب التمارين, وحل المزيد من التمارين المتواجدة في سحابة الدفع الماضية, وهي عباره عن جميع الملفات والملخصات والاختبارات المتعلقة بالدفع السابقة       
       
       <a

className="text-right d-block ml-auto "
href="https://drive.google.com/folderview?id=1MJ5TFCg9BTtqbkyFITVppCHqglZ-Yr51"
>
  مجموعة في سحابة قوقل
</a>
             </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
         المادة وسيلة سهله لتجميع الدرجات في الترم الثاني فلا تفرط فيها-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
         فهم القواعد لا يكفي للحصول على درجات عالية، بل يجب الاكثار من حل التمارين-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
         الحرص على عدم تراكم القواعد ومتابعتها اول بأول-
            </span>
          </div>


        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/firstSem/grammar.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>
                <div className="row">
                <img
              src={"/static/media/firstYear/firstSem/grammarWork.jpg"}
              className="mx-auto"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>
            </div>
        </div>

</div> 

<div className="row">
            <h2
              className="text-red d-block mx-auto mt-5"
            >
              Reading and Vocabulary
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ENGL 113 / Reading and Vocabulary
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Reading: interactions 2
            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
           ساعتان
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربع ساعات
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
            هذه المادة نفس مادة السمستر الأول فهي تطور مهارة القراءة والمخزون اللغوي لدى الطالب لكن هناك فرق بسيط في طريقة أخذ مشتقات المفردات اللغوية ستتضح في طريقة المذاكرة 
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
              :سيكون الاختبار على التالي
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                مفردات اللغة-
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                مشتقات المفردات-
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                التفكير الناقد, ومثال على اسئلته: يعطي جملة واربع خيارات للأجوبة ويسأل اي الخيارات اقرب أو تعني الجملة الأساسية
             </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                Reading Comprehension-     
                       </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                فهم المقروء, عبارة عن قطعة نص واسئلة متنوعة عن هذه القطعة
                 </span>
          </div>




          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                Vocabulary Lists-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                هي عبارة عن مجموعة من مفردات اللغة ومعانيها ومشتقاتها،  فيقوم الدكتور بتحضير قائمة لكلمات معينة لكل فصل (شابتر) في المنهج وإرسالها للطلاب                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                الكتاب, للقراءة ومراجعة التمارين المتعلقة بالمفردات-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                Critical thinking and Reading Comprehension -                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
               مراجعة الملفات المعطاة من قبل الدكتور لهاتين الجزئيتين ◾             
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                   مراجعة التمارين في   
               
                <a
              
              className=""
              href="https://drive.google.com/folderview?id=1MJ5TFCg9BTtqbkyFITVppCHqglZ-Yr51"
            >
                ( السحابة الإلكترونية ) 
            </a>
                
                
             المشابهة لهاتين الجزئيتين ◾              
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
             Vocabulary Lists حفظ معاني الكلمات ومرادفاتها ومشتقاتها والإضافات التي عليها من ◾             
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
             Critical thinking and Reading comprehension التدرب من السحابة أو ملفات الدكتور من ناحية ◾             
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                Word Building-                
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                هي عبارة عن أوراق لمشتقات الكلمات المطلوبة منك                 
                </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                       <a
              
              className=""
              href="https://quizlet.com/en-gb"
            >
                ( Quizlet )
            </a> 
           لحفظ مفردات اللغة وترسيخها استخدم تطبيق      
      
            -  
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                           <a
              
              className=""
              href="https://readtheory.org/"
            >
                ( Read Theory )
            </a> 
            موقع يساعد على تطوير مهارة القراءة      

            -         
                </span>
          </div>

                    


        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">
                <img
              src={"/static/media/firstYear/secondSem/vocab.png"}
              className="mx-auto"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>
            </div>
        </div>
        </div>


        <div className="row">
            <h2
              className="text-red d-block mx-auto mt-5"
            >
              Writing
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ENGL 111 / English Academic Writing
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                Longman Academic Writing Series (3): Paragraphs to Essays (LAW3) 4th edition By Alice Oshima and Ann Hogue
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                Great Writing 3: From Great Paragraphs to Great Essays, (GW3) 3rd edition
  By Keith S. Folse, Elena Vestri Solomon, and David Clabeau
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                 Great Writing 2: Great Paragraphs, (GW2) 4th edition
By Keith S. Folse, April Muchmore-Vokoun, and Elena Vestri Solomon

            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
           ساعتان
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربعة ساعات فعلية ( اربعة حصص في الأسبوع)
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            المادة تقريبًا نفس الترم الأول، ولكن يوجد بعض الاختلافات ومن اهمها أن المادة اصبحت مستقلة بشكل كامل عن مادة (الاستماع والتحدث) واصبحت فقط (الكتابة) ولذلك اصبحت الدرجات على الأعمال من اسايمنتات واختبارات عالية مقارنة بالترم الأول
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
             المادة سيكون فيها كويز, مشابه لكويز الترم الأول
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
             :المادة سيكون فيها 3 واجبات ومواضيعها كالتالي
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Assignment 1: Compare and Contrast Paragraph-
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                Assignment 2: Opinion Paragraph-
             </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                Assignment 3: Essay (Comparison/Opinion)-     
                       </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                 
           الإيساي هو عبارة عن مقال بداخله عدة قطع وستتعلمون طريقة كتابته خطوة بخطوة اثناء الفصل الدراسي بإذن الله 
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
             :وايضا ستكون لديكم "مهمتين" وهي مثل الكويز ولا طريقتها مختلفة بعض الشيء وهي
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
            Editing and Revising Task-
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            وهي عبارة عن قطعة ملئية بالأخطاء ويجب عليك استخراجها وتعديلها
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
             Paraphrasing Task-
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            وهي عبارة عن جمل يطلب منك إعادة كتابتها بصيغة اخرى
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
            :واخيراً, الاختبار النهائي الكتابي في هذا الترم يختلف عن الترم السابق بحيث المطلوب منك كتابة قطعتين وليس قطعة واحد كما كان في الترم الأول في غضون ثلاث ساعات بحيث يكون كالتالي-
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                :القطعة الاولى
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Compare and Contrast
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto "
            >
                :القطعة الثانية
                 </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Opinion
                 </span>
          </div>




          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                الكتب للمذاكرة-          
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                <a href="https://drive.google.com/drive/folders/18Ssx3vXlpGURhVajh1KZUYAx96DUbxRM">
                السحابة للتمارين-
                </a>
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                اليوتيوب للشروحات-          
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               :الرايتنق قد تكون من اكثر المواد التي يختلف فيها الطلبة عن بعضهم في طريقة المذاكرة، ولكل واحد تفضيله الخاص، ولكن سأذكر طريقة ارى انها فعالة اذا طبقت وهي كالتالي 
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                :مراجعة القوانين الاساسية للكتابة التي تم اخذها اثناء الترم الأول مثل-          
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
(subject-verb agreement)         
        </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
(capitalization)     
        </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
(fan boys)     
        </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
ومذاكرة الجديد منها     
        </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://drive.google.com/drive/folders/18Ssx3vXlpGURhVajh1KZUYAx96DUbxRM">
                :حل التمارين والأسئلة في السحابة-
                </a>          
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                اختيار موضوع وكتابة قطعة عنه وعرضها على استاذ/ة المادة واخذ الملاحظات والتنبيهات, وإعادة هذه الطريقة مع موضوع جديد
                </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                التدريب المستمر على الكتابة-
        </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                الذهاب لمكتب المعلم/ة في الساعات المكتبية والاستفادة منهم-
        </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                حل العديد من التمارين المتواجد في السحابة-
        </span>
          </div>




        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row mb-4">
                <img
              src={"/static/media/firstYear/secondSem/writingOne.jpg"}
              className="mx-auto"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>
                <div className="row mb-4">
                <img
              src={"/static/media/firstYear/secondSem/writingTwo.jpg"}
              className="mx-auto"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>
                <div className="row mb-4">
                <img
              src={"/static/media/firstYear/secondSem/writingThree.jpg"}
              className="mx-auto"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>

            </div>
        </div>

</div> 


<div className="row">
            <h2
              className="text-red d-block mx-auto mt-4"
            >
              Physics
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              فيزياء 101
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
             Inquiry to Physics

            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربع ساعات اكاديمية
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربع ساعات 
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
     تعتبر هذه المادة تكرار لأغلب اللي درستوه بالثانوي لكن بالإنجليزي. لا يوجد دروس جديدة كثيرة، بعد كل وحدة ستجدون كروت استذكار في البلاك بورد، فيها أسئلة مشابهة لأسئلة الاختبارات ضروري تحلونها و تفهمونها زين
                </span>
          </div>




          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    
             (السلايدات شرائح (الباوربوينت-
                    </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.3em" }}
              className="text-right d-block ml-auto mb-2"
            >
                <a href="https://drive.google.com/folderview?id=1MJ5TFCg9BTtqbkyFITVppCHqglZ-Yr51">
                 الكتاب للقراءة والفهم
                </a>
                </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
             Review Cards كروت الاستذكار-
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
    
             عبارة عن مسائل في آخر الكتاب لجميع الوحدات, تعتبر مهمة للاختبار
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    
    حل الاختبارات القصيرة والمسائل الموجودة في آخر كل وحدة-   
                     </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                ذاكر السلايدات بتمعن وحاول تعرف كيف ممكن يجيك السؤال
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                حل كروت الاستذكار والاختبارات القصيرة والمسائل جميعها وحاول تفهم الطريقة لأن غالباً ستأتي اسئلة مشابهة لها بالاختبار
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            إذا عندك وقت اقرأ الكتاب عشان تستزيد معلومات عن المنهج        
     </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
ذاكر أول بأول        
    </span>
          </div>

                
                    


        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/secondSem/physics.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>

            </div>
        </div>
        </div>

        <div className="row">
            <h2
              className="text-red d-block mx-auto mt-4"
            >
              Chemistry
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              Chemistry 101
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
             General, Organic, and Biochemistry 9th Edition

            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              اربع ساعات اكاديمية
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ثلاث ساعات, ثلاثة محاضرات بالأسبوع ومحاضرة مختبر كل اسبوعين 
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
تعتبر مادة الكيمياء هي المادة الوحيدة في هذا الترم التي يتم تدريسها بنظام البلوكات وتتكون من ثلاثة بلوكات    
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
البلوك يعني أن الجزء الذي تختبر  فيه بالمد الأول لن يدخل معك بالمد الثاني أو الفاينل، كذلك الجزء الخاص بالمد الثاني لن يدخل بالفاينل            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :محتوى المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                :جزئية الميد الأول
      </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
الكيمياء العامة: كالجدول الدوري والعناصر والمركبات والمحاليل والمخلوط
      </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                :جزئية الميد الثاني
      </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    القواعد والأحماض بالاضافة إلى دروس المولارية والمولالية ومقدمة بسيطة جدًا في الكيمياء العضوية   
   </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                :جزئية الفاينل
      </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
الكيمياء العضوية فقط, هذا يعني أن الفاينل سيركز على جزئية الكيمياء العضوية فقط
   </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
        سلايدات المادة-
                    </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
    تدريبات البلاك بورد على كل بلوك
                    </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    
    مذاكرة سلايدات المادة أول بأول وتقسيم الوقت بين المواد-
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    
    حل أسئلة السلايدات والتدرب عليها بعد كل درس-
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
    
    حل تدريبات البلاك بورد واعتبارها بمثابة اختبار على البلوك-
                    </span>
          </div>




          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            التدريب المكثف على حل المسائل الكيميائية-       
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            الاعتماد على الفهم-       
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            التدريبات في البلاك بورد مستواها قريب من الاختبار، لذا يجب حلها بعد الانتهاء من المذاكرة-       
            </span>
          </div>  
                    

        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/secondSem/chemistry.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>

            </div>
        </div>
        </div>



        <div className="row">
            <h2
              className="text-red d-block mx-auto mt-4"
            >
              Biology
            </h2>
          </div>
        <div className="border p-2 pr-4 ">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              BIOL 101 | Biology for Health Sciences
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
             Biology, Campbell, Reece et. al, 10th Edition (2015

            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ساعتان اكاديمية
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              (ساعة واحدة (محاضرة واحدة في الأسبوع 
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
:تعتبر المادة مشابهة لما تم دراسته في المرحلة الثانوية مع بعض الإضافات، والمواضيع هي      
       </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                الخلية وعضياتها-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                المركبات الكيميائية للخلية, كالدهون والبروتينات-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                هيكل ووظيفة كلاً من: الكربوهيدرات، البروتينات، الدهون، الأحماض النووية-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                غشاء الخلية ووظيفته وطريقة عمله-
               </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                التواصل الخلوي-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                دورة الخلية وانقساماتها-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                التعبير الجيني مثل مربع بانيت-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               DNA ال-
               </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               مقدمة في البكتيريا والفيروسات-
               </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
        شرائح الباوربوينت, السلايدات-
                    </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://drive.google.com/drive/folders/1y-1Wjr_IMLhGqJKYt8lH3-Q43eXzMJKH">
                الكتاب للإطلاع وزيادة الفهم-
                 </a>
                    </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://www.youtube.com/playlist?list=PLxB3gOIBhiQEv-eNStYhjnkB6neCsf5GD">
                شروحات الخاصة بمادة الاحياء في قناة نادي الطلاب-
                 </a>
                    </span>
          </div>

          


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
        قراءة وفهم السلايدات-
                    </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
    متابعة شرح المحاضرة على قناة نادي الطلاب-
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
    الرجوع للكتاب عند عدم فهم نقطة معينة-
                    </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://drive.google.com/drive/folders/1uNwMmVf0pMeFUVpoQ6SOxUHrpcYNtOlu">
    حل الأسئلة والتمارين المتواجدة في السحابة-
                 </a>
                    </span>
          </div>




          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            بما أن المادة لها محاضرة واحدة في الأسبوع، قد يكون محتوى المحاضرة ثقيل ولذلك يجب عدم تراكم المحاضرات ومذاكرتها أول بأول-       
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            المادة تحتوى على مختبر، وللمختبر السلايدات الخاصة فيه، يتم الاختبار فيها في نهاية السنة مع الاختبار النهاية، ولذلك لايجب تجاهلها وتركها للاخر، وانما مذاكرتها من وقتٍ مبكر-       
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            صحيح أن مادة الاحياء تقل عن أقرانها (الفيزياء والكيمياء) من ناحية الساعات الأكاديمية، ولكن هذا لا يعني أنها لا تحتاج إلى نفس العناية والاهتمام، بالعكس هي تحتاج إلى متابعة واهتمام بشكل مستمر، واضف على ذالك قد تكون هي السبب في دخولك التخصص المطلوب بعد توفيق الله-       
            </span>
          </div>  
                    

        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/secondSem/biology.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>

            </div>
        </div>
        </div>




        <div className="row">
            <h2
              className="text-red d-block mx-auto mt-4"
            >
              اللغة العربية
            </h2>
          </div>
        <div className="border p-2 pr-4 mb-5">
            <div className="row">
             <div className=" col-sm-9  pr-4">


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto "
            >
              :اسم المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              Arabic 101
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :اسم الكتاب
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
التحرير العربي
            </span>
          </div>



          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الأكاديمية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ساعتان اكاديمية
            </span>
          </div>


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :عدد الساعات الفعلية
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              ساعتان
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :نبذة عن المادة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
:تتكلم المادة بشكل عام عن مهارة الكتابة، و تتكون المذكرة من اربع وحدات      
       </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                	أهمية الكتابة ومكوناتها الأساسية-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
            	قواعد في الرسم الإملائي والتحرير الكتابي-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
           من فنون الكتابة الوظيفية والإبداعية-
               </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               الأخطاء الشائعة-
               </span>
          </div>





          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mb-1 mt-2"
            >
              :مصادر المذاكرة
            </span>
          </div>

          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
    مذكرة المادة الأساسية
                    </span>
          </div>



          


          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :طريقة المذاكرة
            </span>
          </div>
          <div className="row">
          <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
    
    تعتمد المادة بشكل كبير على الحفظ، فيجب متابعتها بشكل اسبوعي للحرص على عدم تراكم الدروس
                    </span>
          </div>






          <div className="row">
            <span
              style={{ fontSize: "1.5em" }}
              className="text-right text-blue d-block ml-auto mt-2"
            >
              :نصائح عامة
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
            تعتبر المادة وسيلة سهله للحصول على الدرجات فهي من المواد السهلة في السمستر الثاني. 
المذاكرة أول بأول
     
            </span>
          </div>

                    

        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                </div>

            </div>
        </div>
        </div>




    </div>
    );
  }
}

export default SecondSem;