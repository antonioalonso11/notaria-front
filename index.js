/**
 * Created by administrador on 24/05/18.
 */
 var arreglo = [{nombre:"Delia", fecha:new Date(1984, 10, 11), terreno:467, precio:323.53},
                {nombre:"Bety", fecha:new Date(2002, 12, 30), terreno:268, precio:252.56},
                {nombre:"Ernesto", fecha:new Date(2013, 05, 10), terreno:838, precio:285.87},
                {nombre:"Ana", fecha:new Date(1975, 03, 15), terreno:932, precio:380.47},
                {nombre:"Carlos", fecha:new Date(1989, 09, 28), terreno:592, precio:239.28}]

document.addEventListener('DOMContentLoaded', function (event){
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


  const var_tabla = document.getElementById('mitabla');
  let var_c = "<thead><tr> <th>Nombre</th> <th>Fecha</th> <th>Terreno en M^2</th> <th>Precio</th> </tr></thead>" ;

  for (var i = 0; i < arreglo.length; i++) {
    var_c += "<tbody><tr><td>" + arreglo[i].nombre + "</td><td>" + arreglo[i].fecha + "</td><td>" + arreglo[i].terreno + "</td><td>" + arreglo[i].precio + "</td></tr></tbody>" ;
  }
  var_tabla.inneHTML = var_c;

  });
