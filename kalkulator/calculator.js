function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operations = document.getElementById('operations').value;
    if (operations === "1"){
        rez = parseInt(num1) + parseInt(num2);
    }else if (operations ==="2"){
        rez = parseInt(num1) - parseInt(num2);
    }else if (operations ==="3"){
        rez = parseInt(num1) * parseInt(num2);
    }else{
        rez = parseInt(num1) / parseInt(num2);
    }
    console.log(rez);
    let rezultat = document.getElementById("rezultat").innerHTML = rez;
}

    

