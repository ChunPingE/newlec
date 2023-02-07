//Ex10. 마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function () {
    var section = document.querySelector("#section9-2");
    var container = section.querySelector(".container");
    var offset = {x:0 , y:0}
    var current = null;
    var status = section.querySelector(".status");
    var left = container.offsetLeft;
    var top = container.offsetTop;

    var dragging = false;
    document.onmousedown = function (e) {
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
            
        }   
        
    };

    document.onmousemove = function (e) {
        if (!dragging) {
            return;
        }
        var x = e.pageX-offset.x - left;
        var y = e.pageY-offset.y - top;

        current.style.left = x + "px";
        current.style.top = y + "px";
      
        status.innerText = "(x,y):(" + x + "," + y + ")";
    };

    document.onmouseup = function (e) {
        dragging = false;  
    };

});
//Ex9-2. 마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function () {
    var section = document.querySelector("#section9-2");
    var container = section.querySelector(".container");
    var offset = {x:0 , y:0}
    var current = null;
    var status = section.querySelector(".status");
    var left = container.offsetLeft;
    var top = container.offsetTop;

    var dragging = false;
    document.onmousedown = function (e) {
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
            
        }   
        
    };

    document.onmousemove = function (e) {
        if (!dragging) {
            return;
        }
        var x = e.pageX-offset.x - left;
        var y = e.pageY-offset.y - top;

        current.style.left = x + "px";
        current.style.top = y + "px";
      
        status.innerText = "(x,y):(" + x + "," + y + ")";
    };

    document.onmouseup = function (e) {
        dragging = false;  
    };

});

//Ex9. 마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function () {
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var offset = {x:0 , y:0}
    var current = null;
    var status = section.querySelector(".status");
    var left = container.offsetLeft;
    var top = container.offsetTop;

    var dragging = false;
    container.onmousedown = function (e) {
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
           
        }   
        
    };

    container.onmousemove = function (e) {
        if (!dragging) {
            return;
        }
        var x = e.pageX-offset.x - left;
        var y = e.pageY-offset.y - top;

        current.style.left = x + "px";
        current.style.top = y + "px";
      
        status.innerText = "(x,y):(" + x + "," + y + ")";
    };

    container.onmouseup = function (e) {
        dragging = false;  
    };

});
//Ex8. 여러개 박스 드래그 방식으로 옮기기
window.addEventListener("load", function () {
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box")
    var offset = {x:0 , y:0}
    var current = null;

    var dragging = false;
    container.onmousedown = function (e) {
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }   
        
    };

    container.onmousemove = function (e) {
        if (!dragging) {
            return;
        }
        current.style.left = e.pageX-offset.x + "px";
        current.style.top = e.pageY-offset.y + "px";
      
       
    };

    container.onmouseup = function (e) {
        dragging = false;  
    };

    // box.onmousedown = function(e){
    //     offset.x = e.offsetX;
    //     offset.y = e.offsetY;
    // }
});
//Ex7. 마우스 이벤트 객체 - 드래그 방식으로 박스 옮기기
window.addEventListener("load", function () {
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box")
    var offset = {x:0 , y:0}

    var dragging = false;
    container.onmousedown = function (e) {
        if(e.target === box){
            dragging = true;
        }   
        
    };

    container.onmousemove = function (e) {
        if (!dragging) {
            return;
        }
        box.style.left = e.pageX-offset.x + "px";
        box.style.top = e.pageY-offset.y + "px";
      
       
    };

    container.onmouseup = function (e) {
        dragging = false;  
    };

    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});
//Ex6. 마우스 이벤트 객체 마우스 좌표
window.addEventListener("load", function () {
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box")

    container.onclick = function (e) {
        //e.x , e.y / e.offsetX, e.offsetY / e.clinetX, e.paseX...
        console.log("(x,y):" + e.x + ",", e.y);
        console.log("(client):" + e.clientX + ",", e.clientY);
        console.log("(page):" + e.pageX + ",", e.pageY);
        console.log("(offset):" + e.offsetX + ",", e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.x + "px";
        box.style.top = e.y + "px";
       
    };
});
//5. 이벤트 트리거
window.addEventListener("load", function () {
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button")

    fileTriggerButton.onclick = function () {
        //클릭이벤트가 마우스 이벤크임.
        var event = new MouseEvent("click", {
            //뷰는 뭘로 할건지
            'view' : window,
            //버블링이가능한지 
            'bubbles' : true,
            //버블링캔슬이 가능한지
            'cancelable' : true
        });
        
        fileButton.dispatchEvent(event);
       
       
    };
});
//4. 엘리먼트 노드의 기본행위 막기
window.addEventListener("load", function () {
    var section = document.querySelector("#section4");
    var delButton = section.querySelector(".del-button");
    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function (e) {
        e.preventDefault();
        var target = e.target;

        if (target.nodeName != "A"){
            return;
        } 
            
        if(target.classList.contains("sel-button")){
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr = tr.parentElement) {
                
            };
            tr.style.background = "yellow";
        } else if (target.classList.contains("edit-button")){
            alert("수정버튼눌림!");
        } else if (target.classList.contains("del-button")){
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr = tr.parentElement) {
                
            }
            tr.remove(); 
        }
       
    };
});

//Ex3-이벤트 버블링 멈추기 
window.addEventListener("load", function () {
    var section = document.querySelector("#section3");
    var currentImg = section.querySelector(".current-img");
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");

    imgList.onclick = function (e) {
        if(e.target.nodeName != "IMG") {
            return;
        }
        currentImg.src = e.target.src;
    };

    addButton.onclick = function (e) {
        e.stopPropagation();
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };

});

//연습문제 2-선택된 레코드 삭제하기:event target 버블링
window.addEventListener("load", function () {
    var section = document.querySelector("#section2-2");
    var delButton = section.querySelector(".del-button");

    delButton.onclick = function (e) {
        
        if (e.target.nodeName != "INPUT"){
            return;
        } 
        
        var currentTarget = e.target.parentNode.parentNode;
        currentTarget.remove();
    };

    
});

//Ex2-버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener("load", function () {
    var section = document.querySelector("#section2");
    var currentImg = section.querySelector(".current-img");
    var imgList = section.querySelector(".img-list");

    imgList.onclick = function (e) {
        if(e.target.nodeName != "IMG") {
            return;
        }
        currentImg.src = e.target.src;
    };
    /*
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        };
    }
    */
});

//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function () {
    var section = document.querySelector("#section1-1");
    var delButtons = section.querySelectorAll(".del-button");

    for (var i = 0; i < delButtons.length; i++) {
        delButtons[i].onclick = function (e) {
            var currentTarget = e.target.parentNode.parentNode;
            currentTarget.remove();
        };
    }

});

//Ex 1-선택된 이미지 보여주기:event target
window.addEventListener("load", function () {
    var section = document.querySelector("#section1");
    var currentImg = section.querySelector(".current-img");
    var imgs = section.querySelectorAll(".img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        };
    }
    /*
    imgs[0].onclick = function(e){
        currentImg.src = e.target.src;
        
    }
    imgs[1].onclick = function(e){
        currentImg.src = e.target.src;
        
    }
    imgs[2].onclick = function(e){
        currentImg.src = e.target.src; 
    }
    */
});