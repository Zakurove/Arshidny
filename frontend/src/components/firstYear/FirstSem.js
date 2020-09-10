import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";



export class FirstSem extends Component {
    static propTypes = {
        goSecondSem: PropTypes.func.isRequired,
      };
  render() {
    return (
        <div className="container">

        <h1 className="text-center text-red mt-3 mb-3 ">الفصل الأول من السنة الأولى</h1>
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
              ENGL 102 / English Grammar I
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
              1-Betty Schrampfer Azar, Fundamentals of English Grammar, 4th Edition (Chapters 1-5)

            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
              2- Azar/Koch/Hagan, Fundamentals of English Grammar (Workbook), 4th Edition (Chapters 1-5)

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
              اربعة ساعات اكاديمية
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
              خمسة ساعات فعلية, بمعنى خمس حصص بالأسبوع وزن الحصة الواحدة 50 دقيقة
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
              :المادة تتكلم عن قواعد اللغة الإنجليزية, وتحديدا في اول اربعة وحدات عن الأزمنة, الأخيرة عن تكوين الأسئلة على النحو التالي
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 1 (Present Tense)
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 2 (Past Tense)
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 3 (Future Tense)
             </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                Chapter 4 (The Present Perfect and the Past Perfect)
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                Chapter 5 (Asking Questions)
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
              className="text-right d-block ml-auto mb-1"
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
              ENGL 103 / Reading and Vocabulary
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
                Reading: interactions 1
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
           خمس ساعات اكاديمية
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
              خمسة ساعات فعلية, بمعنى خمس حصص بالأسبوع وزن الحصة الواحدة 50 دقيقة
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
              هذه المادة ستطور من مهارات القراءة لدى الطالب وتزيد من مفردات اللغة لديه
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
                Critical Thinking-
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
              src={"/static/media/firstYear/firstSem/vocab.jpg"}
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
              Communication Skills
            </h2>
          </div>
        <div className="border p-2 pr-4 pl-3">
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
              ENGL 101 / English Communication Skills
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
              
1- Longman Academic Writing Series 3: Paragraphs to Essay, Fundamentals of English Grammar, 4th Edition (Chapters 1-5)

            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
2- Great Writing 2
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                3- Listening: Interactions 1: Listening & Speaking
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
              خمس ساعات اكاديمية
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
              خمس ساعات لمادة الكتابة, واربع ساعات لمادة الاستماع والتحدث
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
                المادة تنقسم لمادتين تندرح في المعدل تحت اسم واحد وهي مادة الكتابة, ومادة الاستماع والتحدث, ولكل مادة مدرس وكتاب خاص
                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                مادة الكتابة لها خمس واجبات-
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                مادة الاستماع والتحدث تعتبر مادة بسيطة تعتمد على مهارة الاستماع والمشاركة مع المدرس في المحاضرة بالاضافة لعرضين تقديميين
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
                يمكن الاستعانة بتمارين السحابة للتدرب على بعض التمارين لمادة الكتابة-

                </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
               اما بنسبة لمادة الاستماع والتحدث فيجب تطوير مهارة الاستماع ويمكن الاستعانة    
               <a
              
              className="text-right d-block ml-auto"
              href="https://www.esl-lab.com/"
            >
            بهذا الموقع لتطويرها
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
              className="text-right d-block ml-auto mb-2"
            >
                يجب تطوير المهارتين بالممارسة, فيُكثر من الكتابة باستعمال الأساليب المختلفة التي دُرست بالمنج, ويستحسن الاكثار من التدرب على الاستماع باستعمال الموقع اعلاه في اوقات الفراغ
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
                المادة تعتمد على مهارتي الكتابة والاستماع ولا يمكن تطوير هاتين المهارتين الا بالممارسة-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                يجب التدرب على جميع اساليب الكتابة المدروسة استعدادًا للاختبار النهائي-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
                العروض التقديمية تعد وسيلة سهلة لجمع الدرجات فننصح بالتحضير لها جيدًا-
            </span>
          </div>

        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/firstSem/writingOne.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>
                <div className="row">
                <img
              src={"/static/media/firstYear/firstSem/writingTwo.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px' }}
            />
                </div>
                <div className="row">
                <img
              src={"/static/media/firstYear/firstSem/listening.jpg"}
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
              اللغة العربية
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
              Arabic 101 / عرب 101
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
             المهارات اللغوية عرب 101

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
              ساعتان فعلية
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
        لمادة تتحدث بشكل عام عن المهارات اللغوية والتواصلية وتطويرها للإستفادة منها في المجال الصحي            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto"
            >
            :يتكون الكتاب من ثلاث وحدات    
     </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
                الوحدة الأولى: مهارات الاتصال
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
               الوحدة الثانية: مهارة البحث في المعاجم
             </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
               الوحدة الثالثة: مهارات النحو الأساسية
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
              style={{ fontSize: "1.3em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://drive.google.com/drive/u/0/folders/1MAYNucJgidP_oWXQ3tAZ9qGaCqf5GoM5?sort=13&direction=a">
                الكتاب الرئيسي
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
              className="text-right d-block ml-auto mb-1"
            >
                المذاكرة اولاً بأول حتى لا تتراكم عليك الدروس-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
              مذاكرة الأساسيات في الكتاب مرارًا-
            </span>
          </div>
          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-1"
            >
         حل تدريبات الكتاب-
            </span>
          </div>

          <div className="row">
            <span
              style={{ fontSize: "1.2em" }}
              className="text-right d-block ml-auto mb-2"
            >
         تكثيف الحل على مهارات محددة من الانترنت-
            </span>
          </div>


          </div>   
                    
          <div className="col-sm-3  border-left pt-4">


            </div>

        </div>


</div> 

<div className="row">
            <h2
              className="text-red d-block mx-auto mt-4"
            >
              الثقافة الإسلامية
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
              ISLM 101
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
             مدخل الى الثقافة الاسلامية

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
              حصة واحدة في الاسبوع، وتستمر لمدة ساعتين 
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
     تتكلم عن الثقافة والحضارة الاسلامية، واهميتها والتحديات التي واجهتها، ونبذة عن الاديان الاخرى، وتفصيل في اركان الايمان
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
              style={{ fontSize: "1.3em" }}
              className="text-right d-block ml-auto"
            >
                <a href="https://drive.google.com/file/d/1LY_a_pb07VWVBB3WJ7V403qTF4a3W05r/view?usp=sharing">
                 كتاب مدخل الى الثقافة الاسلامية 
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
              className="text-right d-block ml-auto mb-2"
            >
                لا تختلف كثيرًا عن المواد الدينية في المرحلة الثانوية, وتتطلب تحديد الأشياء المهمة وحفظها
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
                تعتبر هذه المادة سهلة, ولأنها تعتمد على الحفظ والقراءة المركزة فيفضل مراجعتها بشكل اسبوعي
            </span>
          </div>

                
                    


        </div>
            <div className="col-sm-3  border-left pt-4">
                <div className="row">           
                 <img
              src={"/static/media/firstYear/firstSem/islamic.jpg"}
              className="mx-auto mb-4"
              alt=""
              style={{ maxHeight: "320px", maxWidth: '250px'  }}
            /></div>

            </div>
        </div>
        </div>




    </div>
    );
  }
}

export default FirstSem;