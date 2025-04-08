document.addEventListener("DOMContentLoaded",function(){

   
    let inputid = document.querySelector('#inputid');
    let checkid = document.querySelector('#checkid');

    id.addEventListener("input",
        function(a){
            if(inputid.value.length >4 && inputid.value.length<=20){
                checkid.innerHtml = "올바른 형식입니다";
            }
            else if(inputid.value.length < 4 || inputid.value.length > 20){
                checkid.innerHTML = "아이디는 소문자/숫자 4자이상 사용 가능합니다.";
            }

        }
    )
    
    let button = document.querySelector("#inputbutton");
    button.addEventListener("click",
        function(e){
            if(button == onclick){
                alert("가입하시겠습니까?");
            }
        }
    )
    

});