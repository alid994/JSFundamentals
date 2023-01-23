function ucenjeEngleskog() {
    let dan = document.getElementById("dan").value;
    let poruka;
    if ((dan == "Monday") || (dan == "monday")) {
        poruka = "Ispravno napisan 'ponedjeljak' na engleskom jeziku.";
    } else if ((dan == "Tuesday") || (dan == "tuesday")) {
        poruka = "Ispravno napisan 'utorak' na engleskom jeziku.";
    } else if ((dan == "Wednesday") || (dan == "wednesday")) {
        poruka = "Ispravno napisana 'srijeda' na engleskom jeziku.";
    } else if ((dan == "Thursday") || (dan == "thursday")) {
        poruka = "Ispravno napisan 'četvrtak' na engleskom jeziku.";
    } else if ((dan == "Friday") || (dan == "friday")) {
        poruka = "Ispravno napisan 'petak' na engleskom jeziku.";
    } else if ((dan == "Saturday") || (dan == "saturday")) {
        poruka = "Ispravno napisana 'subota' na engleskom jeziku.";
    } else if ((dan == "Sunday") || (dan == "sunday")) {
        poruka = "Ispravno napisana 'nedjelja na engleskom jeziku.";
    } else {
        poruka = "Neispravno napisan dan na engleskom jeziku.";
    }
    odgovor = document.getElementById("odgovor").innerHTML = poruka;
}