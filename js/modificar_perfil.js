
document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (t) {
        t.onkeyup = changeEventHandler;
        //t.addEventListener('focusin', changeFocusIn);
        //t.addEventListener('focusout', changeFocusOut);
    })
});

function changeEventHandler(event) {
    var d = event.target.getAttribute('maxlength');
    event.target.nextElementSibling.innerHTML = event.target.value.length + "-"+d;
}

