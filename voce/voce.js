function voce() {
    let brojOmiljenihVockiText = prompt("Unesite broj omiljenog voća?");
    let brojOmiljenihVocki = parseInt(brojOmiljenihVockiText);

    const voce = []
    for (let i = 0; i < brojOmiljenihVocki; i++) {
        let vocka = prompt("Unesite omiljeno voće?");
        voce[i] = vocka
    }

    let ispis = "<ul>";

    for (let i = 0; i < brojOmiljenihVocki; i++) {
        
        ispis = ispis + "<li>" + voce[i] + "</li>"
    }

    ispis = ispis + "</ul>";
    document.getElementById("voce").innerHTML=ispis;
}

function pocniIgricu() {
    for( ; true; ){
        let korisnickiUnos = prompt("Unesite pteicu i započnite igricu!");
        if(korisnickiUnos == 5){
            alert("Unijeli ste peticu i počeli ste igricu")
            break;
        }else{
            alert("Niste unijeli peticu!!")
            korisnickiUnos;
        }
    }
}

function pronadjiBananu(){
    let unos = prompt("Unesi neki tekst?");
    let unosMalaSlova = unos.toLowerCase();
    let pozicija = unosMalaSlova.indexOf("banana");
    if(pozicija == -1){
        alert("Banana nije pronađena!");
    }else{
        alert("Banana je na poziciji " + pozicija);
    }
}