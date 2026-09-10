//js leggi di più
function myFunction() {
  			var dots = document.getElementById("dots");
  			var moreText = document.getElementById("more");
  			var btnText = document.getElementById("myBtn");

  			if (dots.style.display === "none") {
    			dots.style.display = "inline";
    			btnText.innerHTML = "<i>Mostra altro"; 
    			moreText.style.display = "none";
  				} else {
    			dots.style.display = "none";
    			btnText.innerHTML = "<i>Mostra meno"; 
    			moreText.style.display = "inline";
  				}
			}

		function myFunction2() {
  			var dots = document.getElementById("dots2");
  			var moreText = document.getElementById("more2");
  			var btnText = document.getElementById("myBtn2");

  			if (dots.style.display === "none") {
    			dots.style.display = "inline";
    			btnText.innerHTML = "<i>Mostra altro"; 
    			moreText.style.display = "none";
  				} else {
    			dots.style.display = "none";
    			btnText.innerHTML = "<i>Mostra meno"; 
    			moreText.style.display = "inline";
  				}
			}

//tab
function openCity(evt, Tutto) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Tutto).style.display = "grid"; //cambiato manualmente, in origine era block ma le card non seguivano il layout
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultOpen").click();
