//--8. 데이터뽀개기
{   
    let exam = {
        kor:10,
        eng:30,
        math:40
    };

    function exam(exam) {
        //let kor = exam.kor;
        //let eng = exam.eng;

        let {kor, eng} = exam;
  
        console.log(`kor:${kor}, eng:${eng}`);
    }

    
    function exam({kor, eng}) {
  
        console.log(`kor:${kor}, eng:${eng}`);
    }

    print(exam);
  

    
}

//--7. 향상된 JSON 객체 표현식 #2 : 변수형 속성
{   
    let attr = "kor";
    let exam = {
        [attr]:10
    };

    console.log(exam.kor); // 10
}


//----------6. 향상된 객체의 표현식 #1------
{
    let kor = 30; 
    let eng = 40; 
    let math = 50;

    let exam = {kor, eng, math, total(){return 10;}};

    console.log(exam.kor);
    console.log(exam.total());

}







//----------------
// //var x = 30;
// let x = 30;
// console.log(window.x);
// console.log(x);

// // let x = 20;
// // console.log(x);

// {
//     let a
// }
// console.log(a);

{
    // let template = " <section> \
    //             <h1></h1> \
    //             <p></p> \
    //             </section> \
    //             ";
    let title  = "ES6";
    let content = "새로운 문자열"
    let template = String.raw`<section>
        <h1>${title}\n\n</h1>
        <p>${content}</p>
    </section>
    `;       

    console.log(template);

}
