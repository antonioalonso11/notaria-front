/**
 * Created by administrador on 24/05/18.
 */
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    var tabsElems = document.querySelectorAll('.tabs');
    M.Tabs.init(tabsElems);

    var butonElems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(butonElems);

    var tooltipElems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipElems);

    var characterCounterElems = document.querySelectorAll('input#input_text');
    M.CharacterCounter.init(characterCounterElems);


    var dropdownElems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(dropdownElems);

});


