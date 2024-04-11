// Function to validate a contact form
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all fields.");
        return false;
    }

    // Add more complex validation logic for email, if needed

    return true;
}

// Function to enable smooth scrolling for anchor links
function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Call functions when the page is loaded
window.onload = function() {
    enableSmoothScrolling();

    document.getElementById("contactForm").onsubmit = validateContactForm;

    document.getElementById("darkModeToggle").onclick = toggleDarkMode;
}
// new code 
myitem = document.getElementById("firsttest");
// Added this to first line in "about me" page
myitem.addEventListener("click", onClick);
// Changes text from black to green
function onClick() {  
    myitem.style.color = "green";  
    // new code
    myitem.onclick = function() {
        // Change the background color to lightblue
        myitem.style.backgroundColor = "lightblue";
      
        // Change the font size to 36px
        myitem.style.fontSize = "36px";
        // new font
        myitem.style.fontFamily = "Arial";
        // new
        myitem.style.border = "2px solid black";
        // new code
        // Save the original values of the properties that we'll be changing
const originalBackgroundColor = myitem.style.backgroundColor;
const originalFontSize = myitem.style.fontSize;
const originalFontFamily = myitem.style.fontFamily;
const originalBorder = myitem.style.border;

// Add an event listener for the mouseout event
myitem.addEventListener("mouseout", function() {
  // Reset the properties to their original values
  myitem.style.backgroundColor = originalBackgroundColor;
  myitem.style.fontSize = originalFontSize;
  myitem.style.fontFamily = originalFontFamily;
  myitem.style.border = originalBorder;
});
      }
}
//thebutton = document.getElementById("thebutton");  
//otheritem = document.getElementById("buttontest");
// Event listener 
//thebutton.addEventListener("click", onButtonClick);
//function onButtonClick() {  
    //otheritem.style.color = "red";  
//}
const thebutton = document.getElementById("thebutton");
const otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "red";
    const thebutton = document.getElementById("thebutton");
    //
//const otheritem = document.getElementById("buttontest");
const secondbutton = document.getElementById("secondbutton");
const otheritem2 = document.getElementById("othercontent");
//thebutton.addEventListener("click", onButtonClick);
secondbutton.addEventListener("click", onSecondButtonClick);

function onButtonClick() {
  otheritem.style.color = "red";
}

function onSecondButtonClick() {
  otheritem2.style.backgroundColor = "yellow";
  otheritem2.style.fontSize = "24px";
}
  }
  textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
const thirdbutton = document.getElementById("thirdbutton");
const otheritem3 = document.getElementById("othercontent2");
thirdbutton.addEventListener("click", onThirdButtonClick);
function onThirdButtonClick() {
    otheritem3.style.border = "2px solid blue";
    otheritem3.style.padding = "10px";
  }
  document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");

    imageContainer.addEventListener("click", function() {
        imageContainer.classList.toggle("expanded");
    });
});
