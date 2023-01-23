function voce() {
    const omiljenoVoce = [];
    omiljenoVoce[0] = prompt("Unesite omiljeno voće?");
    omiljenoVoce[1] = prompt("Unesite omiljeno voće?");
    omiljenoVoce[2] = prompt("Unesite omiljeno voće?");
    omiljenoVoce[3] = prompt("Unesite omiljeno voće?");
    omiljenoVoce[4] = prompt("Unesite omiljeno voće?")
    let voce1 = document.getElementById("1").innerHTML = omiljenoVoce[0];
    let voce2 = document.getElementById("2").innerHTML = omiljenoVoce[1];
    let voce3 = document.getElementById("3").innerHTML = omiljenoVoce[2];
    let voce4 = document.getElementById("4").innerHTML = omiljenoVoce[3];
    let voce5 = document.getElementById("5").innerHTML = omiljenoVoce[4];
    let textHTML;
    textHTML = "<ul>";
    textHTML = textHTML + "<li>" + omiljenoVoce[0] + "</li>" + "</ul>";
    document.getElementById("voce").innerHTML = textHTML;


}