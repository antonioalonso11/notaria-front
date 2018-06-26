
document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (t) {
        t.onkeyup = changeEventHandler;
        console.log(t.getAttribute('maxlength'));
    })
//    document.getElementById('telefono_contacto').onkeyup=changeEventHandler;
});

function changeEventHandler(event) {
    event.target.parentNode.querySelector('span').innerHTML = event.target.value.length;
    console.log(event.target.value.length)
}