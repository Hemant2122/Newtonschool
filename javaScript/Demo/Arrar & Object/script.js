var form = document.getElementById("frm");
form.onsubmit = function(){
    var user = {
        firstname : document.getElementById("first").value,
        lastname : document.getElementById("last").value,
        result : document.getElementById("result")
    };

    user.result.innerHTML = user.firstname +" "+ user.lastname;
    return false;
}