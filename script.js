var knapp = document.getElementById("okknapp");
knapp.addEventListener("click", function(){
    var namntxt = document.getElementById("namn").value;
    if (namntxt){
        localStorage.setItem("Namn", namntxt);
    }
    var inmatadtxt = document.getElementById("inmatadtext");
    inmatadtxt.innerHTML = namntxt;
   
    if(inmatadtxt.innerHTML){
    	document.body.appendChild(raderaknapp);
    }
});
var raderaknapp = document.createElement("button");
    raderaknapp.innerHTML = "Radera"
    raderaknapp.addEventListener("click", function(){
    var raderatxt1 = document.getElementById("namn");
    var raderatxt2 = document.getElementById("inmatadtext");
    raderatxt1.value ="";
    raderatxt2.innerHTML ="";
    document.body.removeChild(raderaknapp);
});

