function onSubmitBroja() {
    let unos = document.forms["mojaForma"]["number"];
    let unosValue = unos.value;
    if (unosValue === ""){
        alert("Unesite broj");
        return false;
    }
    if(unosValue > 23){
        alert("Unesite broj manji od 23!")
        return false;
    }
    return true;
}