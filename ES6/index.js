// Arrow Functions와 그 특징
{
    function print() {
        this.kor = 10;
        console.log("print");
    }  

    function Exam() {
        this.kor = 0;
        this.eng = 0;
        this.math = 0;

    }

    print();
    
    let exam = new Exam();

    console.log(exam);



}
/*
//17. Default Value의 이전방식과 현재방식
{
    // function print(x, y){
    //     x = x || 0;
    //     y = y || 0;
    //     return x + y;
    // }

    function print(x=0, y=0){
    
        return x + y;
    }

    


}

//--16. Spread Operator
{

    function print(x, y, z){
        console.log(x);
        console.log(y);
        console.log(z);
    }
    let set = new Set([2,4,6]);
    let nums = [...set];

    //print(nums[0], nums[1], nums[3]);
    print(...nums);
    
}

//--13. set컬렉션
{

    let exam = new Map([[1,"hello"],[2,"hi"],[3, "oky"]]);
    // exam.set("kor", 10);
    // exam.set("eng", 10);
    // exam.set("math", 10);


    for (let [k, v]of exam)
        console.log(`${k}, ${v}`);
    
}

//--13. set컬렉션
{
    let ar = [2,4,3,5,6,4,3]
    let set = new Set(ar);
    console.log(set.size); // 5
    console.log("-------------");
    set.forEach(function(value, key, ownerSet) {
        console.log(`${key}:${value}`);
    })
    console.log("-------------");
    for (let v of set){
        console.log(v);
    }
    console.log("-------------");
    for (let [key, value] of set.entries()){
        console.log(`${key}:${value}`);
    }
    
    
}


//--12.  Array Destructuring #2
{
    let exam = [10,20,30];

    let [kor, eng, math, com=40] = exam;

    //kor3만 뽑고싶다.
    let [ , , kor3] = exam ; //30

    let notices = {
        title:"공지사항",
        list:[
            {title:"aa", content:"dd"},
            {title:"bb", content:"cc"},
        ]
    }
    let {list:[, notice2]} = notices; 
    console.log(notice2);
    console.log(notice2.title);

}

//--11. Array Destructuring #1
{
    let kors = [10,20,30];

    let [kor1, kor2] = kors;  //10 20

    //kor3만 뽑고싶다.
    let [ , , kor3] = kors; //30



}

//--10. Object Destructuring #3-2
{
    let exam = {
        kor: 10,
        eng: 30,
        math: 40,
        student:{
            name:"newlec",
            phone:"010-2222-3333"
        }
    };
    let {kor, eng, student:{name}, student:{phone}} = exam;
    console.log(kor);
    console.log(eng);
    console.log(name);
    console.log(phone);

}

//--10. Object Destructuring #3-1
{
    let exam = {
        kor: 10,
        eng: 30,
        math: 40
    };

    //let { kor, eng} = exam;

    let { kor:korean, eng:english} = exam;
    console.log(korean);

}

//--9. Object Destructuring #2
{
    let exam = {
        kor: 10,
        eng: 30,
        math: 40
    };

    let { kor, eng, math } = exam;

    console.log(`kor:${kor}, eng:${eng}, math:${math}`);

    exam.kor = 100;
    exam.eng = 90;

    //kor = exam.kor;
    //eng = exam.eng; 
    //이렇게 해줘야한다.그런데 귀찮다.

    ({ kor, math } = exam);

    console.log(`kor:${kor}, eng:${eng}, math:${math}`);
}

//--8. Object Destructuring #1 
{
    let exam = {
        kor: 10,
        eng: 30,
        math: 40
    };

    function exam(exam) {
        //let kor = exam.kor;
        //let eng = exam.eng;

        let { kor, eng } = exam;

        console.log(`kor:${kor}, eng:${eng}`);
    }


    function exam({ kor, eng }) {

        console.log(`kor:${kor}, eng:${eng}`);
    }

    print(exam);



}

//--7. 향상된 JSON 객체 표현식 #2 : 변수형 속성
{
    let attr = "kor";
    let exam = {
        [attr]: 10
    };

    console.log(exam.kor); // 10
}


//----------6. 향상된 객체의 표현식 #1------
{
    let kor = 30;
    let eng = 40;
    let math = 50;

    let exam = { kor, eng, math, total() { return 10; } };

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
    let title = "ES6";
    let content = "새로운 문자열"
    let template = String.raw`<section>
        <h1>${title}\n\n</h1>
        <p>${content}</p>
    </section>
    `;

    console.log(template);

}
*/