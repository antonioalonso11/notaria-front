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

function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("myTable");
	  switching = true;
	  
	  dir = "asc";
	  
	  while (switching) {
	  
	    switching = false;
	    rows = table.getElementsByTagName("TR");
	    
	    for (i = 1; i < (rows.length - 1); i++) {
	      
	      shouldSwitch = false;
	      
	      x = rows[i].getElementsByTagName("TD")[n];
	      y = rows[i + 1].getElementsByTagName("TD")[n];
	      
	      if (dir == "asc") {
	          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
	          
	            shouldSwitch= true;
	            break;
	          }
	        } else if (dir == "desc") {
	          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
	           
	            shouldSwitch = true;
	            break;
	          }
	        }
	      }
	      if (shouldSwitch) {

	        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	        switching = true;
	      
	        switchcount ++;      
	      } else {
	      
	        if (switchcount == 0 && dir == "asc") {
	          dir = "desc";
	          switching = true;
	        }
	      }
	    }
	  }