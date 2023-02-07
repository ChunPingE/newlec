//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function() {
    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");
    var titleId = document.querySelector(".title");
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function() {
        var template = section.querySelector("template");
        for (var i = 0; i < notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            tds[1].innerHTML = '<a href="">' + notices[i].title; + '</a>'
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
    
            tbodyNode.append(cloneNode);
        } 
    };
    bindData();

    var titleSorted = false;

    titleId.onclick = function(){
        tbodyNode.innerHTML = "";
        if(!titleSorted){
            notices.sort(function(a,b){
                titleSorted = true;
                if(a.title < b.title){
                    return -1;
                } else if(a.title > b.title) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else{
            notices.reverse();
        }
        bindData();

       
    };

    
});

//Ex9 : 다중 엘리먼트 선택방법과 일괄 삭제
window.addEventListener("load", function() {
    var section = document.querySelector("#section9");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i = 0; i < inputs.length; i++){
            inputs[i].checked =  allCheckbox.checked;
        }
    
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        for(var i = 0; i < inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length != 2){
            alert("두개가 선택되어야 합니다.");
            return;
        }

        var trs = [];

        for(var i = 0; i < inputs.length; i++){
            trs.push(inputs[i].parentElement.parentElement);
        }
        var cloneNode =trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };

    
});

//Ex8 : 노드 삽입(insertBefore, insertAdjacentElement), 노드 순회
window.addEventListener("load", function() {
    var section = document.querySelector("#section8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

 
    //var currentNode = tbodyNode.children[0];
    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        if(nextNode == null){
            alert("더이상 이동할 수 없습니다.");
            return;
        }
        //화면에서 없앰 메모리에서 사라지는 것은 아님.
        //tbodyNode.removeChild(nextNode);
        //tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin", nextNode);


    };

    upButton.onclick = function(){
        var preNode = currentNode.previousElementSibling;
        if(preNode == null){
            alert("더이상 이동할 수 없습니다.");
            return;
        }
        //tbodyNode.removeChild(currentNode);
        //tbodyNode.insertBefore(currentNode, preNode);
        currentNode.insertAdjacentElement("afterend", preNode);
    };

    
});
//Ex7 : 노드 복제 및 템플릿(template) 복제
window.addEventListener("load", function() {
    var notices  = [
        {id:5, title:"파이야", regDate:"2023.02.03", writerId:"newlec", hit:0},
        {id:6, title:"추가할내용", regDate:"2023.02.03", writerId:"newlec", hit:17}
    ]
    var section = document.querySelector("#section7");

    var noticeList = section.querySelector(".notice-list");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    var tbodyNode = noticeList.querySelector("tbody");

    cloneButton.onclick = function(){
        
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        

        var tds = cloneNode.querySelectorAll("td");
        tds[0].innerText = notices[0].id;
        tds[1].innerHTML = '<a href="">' + notices[0].title; + '</a>'


        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;
        tbodyNode.append(cloneNode);
       
    };

    templateButton.onclick = function(){
        
        
        for (var i = 0; i < notices.length; i++){
            var template = section.querySelector("template");
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].innerText = notices[i].id;
            tds[1].innerHTML = '<a href="">' + notices[i].title; + '</a>'
    
            // var aNode = tds[1].children[0];
            // aNode.href=notices[0].id;
            // aNode.textContent = notices[0].title;
    
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
    
            tbodyNode.append(cloneNode);
        }
        
   
    };
});
//Ex6-2 : 노드조작 : 메뉴 추가
window.addEventListener("load", function() {
    var section = document.querySelector("#section6-2");

    var titleInput = section.querySelector(".title-input");
    var menuListUl= section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function() {
        var title = titleInput.value;

        var html = '<a href="">' + title + '</a>';
        var liNode = document.createElement("li");
        liNode.innerHTML = html;

        menuListUl.appendChild(liNode);

        //menuListUl.append(node1, node2, node3);
        //menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>'

        /*
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        
        var aNode = document.createElement("a"); 
        aNode.href="";
        aNode.appendChild(txtNode);

        var liNode = document.createElement("li");
        liNode.appendChild(aNode);
       
        menuListUl.appendChild(liNode);

        
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
        */
    };

    delButton.onclick = function(){
        //var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        //menuListUl.removeChild(liNode);
        liNode.remove();
    };
});
//Ex6 : 노드조작 : 메뉴 추가
window.addEventListener("load", function() {
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
       
    };

    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };
});

//Ex5-2 : 엘리먼트 노드 & CSS 속성변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section5_2");
    // var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function(){
        //img.src = "images/" + srcInput.value;
        img.src = "images/" + imgSelect.value;

        //img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
        //console.log(img.className);
       
    };
});

//Ex5 : 엘리먼트 노드의 속성변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section5");
    // var srcInput = section.querySelector(".src-input");
    var imgSelct = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function(){
        //img.src = "images/" + srcInput.value;
        img.src = "images/" + imgSelct.value;
    };
});

//Ex4 : chlidNodes를 이용한 노드 선택
window.addEventListener("load", function() {
    var section4 = document.querySelector("#section4");
    //var inputs = section4.querySelectorAll("input");
    var box = section4.querySelector(".box");

    var input1 = box.children[0]
    var input2 = box.children[1]

    input1.value = "hello";
    input2.value = "okay";
    
});

//Ex3 : Selectors API level 1
window.addEventListener("load", function() {
    // var section3 = document.getElementById("section3");
    // var txtX = section3.querySelector("input[name='x']");
    // var txtY = section3.querySelector(".txt-y");
    // var btnAdd = section3.querySelector(".btn-add");
    // var txtSum  = section3.querySelector(".txt-sum");
    
    // btnAdd.onclick = function(){
    //     var x = parseInt(txtX.value);
    //     var y = parseInt(txtY.value);

    //     txtSum.value = x+y;
    // }
    $("#section3 .btn-add").click(function(){
        var x = parseInt($("#section3 input[name='x']").val());
        var y = parseInt($("#section3 .txt-y").val());
        $("#section3 .sum").attr("value", x + y);
    });

});

//Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function() {
    // var section2 = document.getElementById("section2");
    // var txtX = section2.getElementsByClassName("txt-x")[0];
    // var txtY = section2.getElementsByClassName("txt-y")[0];
    // var btnAdd = section2.getElementsByClassName("btn-add")[0];
    // var txtSum  = section2.getElementsByClassName("txt-sum")[0];
    
    $("#section2 .btn-add").click(function(){
        var x = parseInt($("#section2 .txt-x").val());
        var y = parseInt($("#section2 .txt-y").val());
        $("#section2 .txt-sum").attr("value", xs + y);
    });

    // btnAdd.onclick = function(){
    //     var x = parseInt(txtX.value);
    //     var y = parseInt(txtY.value);

    //     txtSum.value = x+y;
    // }
});

//Ex1 :계산기프로그램
window.addEventListener("load", function() {
    // var txtX = document.getElementById("txt-x");
    // var txtY = document.getElementById("txt-y");
    // var btnAdd = document.getElementById("btn-add");
    // var txtSum = document.getElementById("txt-sum");

    // btnAdd.onclick = function(){
    //     var x = parseInt(txtX.value);
    //     var y = parseInt(txtY.value);

    //     txtSum.value = x+y;
    // }
  
    $("#btn-add").click(function(){
        var x = parseInt($("#txt-x").val());
        var y = parseInt($("#txt-y").val());
        $("#txt-sum").attr("value", x + y);
    });


});