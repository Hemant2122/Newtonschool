function run(){
    var code = document.getElementById("code").value;
    var result_box = document.getElementById("result");
    result_box.innerHTML = code;
    var code_box = document.getElementById("code_box");
    code_box.style.display = "none";
    var result_box = document.getElementById("show");
    result_box.style.display = "block";
    result_box.setAttribute("class","animate__animated animate__slideInRight");
    var run_btn = document.getElementById("run_btn");
    run_btn.style.display = "none";
    var icon = document.getElementById("icon");
    icon.style.display = "block";
}

function back(){
    var result_box = document.getElementById("show");
    result_box.style.display = "none";
    var code_box = document.getElementById("code_box");
    code_box.style.display = "block";
    code_box.setAttribute("class","animate__animated animate__slideInLeft");
    var run_btn = document.getElementById("run_btn");
    run_btn.style.display = "block";
    var icon = document.getElementById("icon");
    icon.style.display = "none";
}