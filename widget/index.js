(function () {
    console.log('hi')
    console.log(document.querySelectorAll('div#pixibo'));
    var container = document.querySelector('div#pixibo');

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var btn = document.createElement("BUTTON");  
    var text = document.createTextNode("Pixibo modal");
    btn.appendChild(text);
    btn.onclick = function() {
        console.log('hi---')
        modal.style.display = "block";
    };
    container.appendChild(btn); 

    console.log("document", document);
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
  })();