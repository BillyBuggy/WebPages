// OutlineMode.js

var i;
var buttons = document.getElementsByTagName('button');
var colls   = document.getElementsByClassName("collapsible");
//--- Try to insert a <br> before each <button>.
for (i = 0; i < buttons.length; i++) {
       elem = document.createElement("p");
       buttons[i].parentNode.insertBefore( elem, buttons[i] );
}
for (i = 0; i < colls  .length; i++) {
  colls[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
//D     console.log( "------------------------"                         )
//D     console.log( "content               = " , content               )
//D     console.log( "typeof(content)       = " , typeof(content)       )
//D     console.log( "typeof(content.style) = " , typeof(content.style) )
//D     console.log( "C* == 'div'           = " , content == "div"      )
//D //F console.log( "C*.name               = " , content.name          )
//D //F console.log( "C*.class              = " , content.class         )
//D //F console.log( "C*.type               = " , content.type          )
//D     console.log( "C*.style              = " , content.style         )
//D     console.log( "C*.style.display      = " , content.style.display )
//D     console.log( "C*.style.cssText      = " , content.style.cssText )
//D //F console.log( "C*.style.['cssText']  = " , content.style.["cssText"] )
//D     console.log( "C*.id                 = " , content.id            )
//D     console.log( "getElementById('cb')  = " , document.getElementById('cb'))
    if ( content.id == "cb" ) {                   // Manually place in br tag.
          content = content.nextElementSibling;   // Skip  br tag
      //X content = content.nextElementSibling;   // Skip /br tag
      //X: Only br is an element
    }
    if (content.style.display === "block") {
      content.style.display = "none";
      //F colls[i].innerText = "+";
      this.innerText         = "+";
    } else {
      content.style.display = "block";
      //F colls[i].innerText = "-";
      this.innerText         = "-";
    }
  });
}

//X  // Trying to left-align '$$' quadratic formula.  12/12/2025
//X  MathJax = {                // MathJax 3.x
//X    chtml: {
//X      displayAlign: 'left',
//X      displayIndent: '0em'   // Optional: set indentation (default 0)
//X    }
//X  };
//X  MathJax.Hub.Config({       // MathJax 2.x
//X    displayAlign: "left",
//X    displayIndent: "0em"     // Optional: set indentation
//X  });
