function showAlert() {
    var alertElement = document.createElement("div");
    alertElement.classList.add("alert");
    alertElement.innerText = "Button clicked! alert is working";
    
    var section = document.querySelector("section");
    section.appendChild(alertElement);
    
    setTimeout(function() {
        section.removeChild(alertElement);
    }, 2000);
}
 