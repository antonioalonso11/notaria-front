
document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (t) {
        t.onkeyup = changeEventHandler;
        t.addEventListener('focusin', changeFocusIn);
        t.addEventListener('focusout', changeFocusOut);
    })
});

function changeEventHandler(event) {
    var d = event.target.getAttribute('maxlength');
    event.target.nextElementSibling.innerHTML = event.target.value.length + "-"+d;
}

function changeFocusIn(event) {
    var thisFocus = event.target.nextElementSibling;
    thisFocus.style.color = '#1e87f0';
}

function changeFocusOut(event) {
    var thisFocus = event.target.nextElementSibling;
    thisFocus.style.color = "initial";
}