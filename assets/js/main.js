
function submitForm() {
    
    let nameUser = document.getElementById("name").value;
    let km = parseInt(document.getElementById("percorsoKm").value);
    let ageGroup = document.getElementById("fascia-eta").value;
    let ranodmNumSmall = Math.floor(Math.random() * 10) +1;
    let randomNumBig = Math.floor(Math.random() * 89999) +1;

    let ticketPrice = 0.21 * km;
    let tPriceDiscount20 = (ticketPrice * 0.8).toFixed(2);
    let tPriceDiscount40 = (ticketPrice * 0.6).toFixed(2);

    document.getElementById("nomepass").innerHTML = nameUser;
    document.getElementById("carrozza").innerHTML = ranodmNumSmall;
    document.getElementById("codice-cp").innerHTML = randomNumBig;

    if (ageGroup == "minorenne"){
        
        document.getElementById("costo").innerHTML = tPriceDiscount20 + "€";
    } else if (ageGroup == "over65"){
        
        document.getElementById("costo").innerHTML = tPriceDiscount40 + "€";
    } else{
        
        document.getElementById("costo").innerHTML = ticketPrice + "€";
    }
    
}
