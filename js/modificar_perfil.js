
document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (t) {
        t.nextElementSibling.innerHTML = '0 - ' + t.getAttribute('maxlength');
        t.onkeyup = changeEventHandler;
        t.addEventListener("input", validacion);
    });
    var form = document.getElementById('formulario');
    /*form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var invalidInputs = document.querySelectorAll('.uk-input:invalid');

        if(invalidInputs.length === 0) {
            // var dataform = new FormData(form);
            console.log(form);
        }
    }, false);*/

});

function changeEventHandler(event) {
    var d = event.target.maxLength;
    event.target.nextElementSibling.innerHTML = event.target.value.length + " - " + d;
}

function validacion(evento) {
    if (!evento.target.validity.valid) {
        evento.target.classList.add('uk-form-danger');
    } else {
        evento.target.classList.remove('uk-form-danger');
    }
}