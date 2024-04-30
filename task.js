function generateCard() {
    var color = document.getElementById("color").value;
    var number = document.getElementById("number").value;
    var cardContainer = document.getElementById("cardContainer");

    cardContainer.innerHTML = ""; 
    var card = document.createElement("div");


    
    
    card.style.width = "100px";
    card.style.height = "150px";
    card.style.backgroundColor = color;
    card.style.margin = "10px";
    card.style.padding = "10px";
    



    
    card.innerText = "Card " + color + " " + number;

    cardContainer.appendChild(card); 
}