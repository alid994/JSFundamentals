function onLoadHandle(){

    for(let i = 0; i < localStorage.length; i++){
        const tableRow = document.createElement("tr");
        let key = localStorage.key(i);
        if(key.startsWith("Person: ")){
        let personJsonString = localStorage.getItem(key);
        console.log(key + ": " + personJsonString);
        let personObject = JSON.parse(personJsonString);
        addTableRow(personObject);
        }
    }
};

class Person{
    constructor(name,surname,jmbg,bitrhday){
        this.name=name;
        this.surname=surname;
        this.jmbg=jmbg;
        this.bitrhday=bitrhday;
    }
};

function addPerson(){
    const nameInput = document.forms["person_form"]["name_input"];
    const surnameInput = document.forms["person_form"]["surname_input"];
    const jmbgInput = document.forms["person_form"]["nin_input"];
    const dateInput = document.forms["person_form"]["date_input"];

    const personObject = new Person(nameInput.value, surnameInput.value, jmbgInput.value, dateInput.value);
    addTableRow(personObject);
    localStorage.setItem("Person: " + personObject.jmbg, JSON.stringify(personObject));

    nameInput.value="";    
    surnameInput.value="";
    jmbgInput.value="";
    dateInput.value="";


}

function addTableRow(personObject){
    const personTableBody = document.getElementById("person_table_data");

    const tableRow = document.createElement("tr");
    for(const personProperty in personObject){
        const tableData = document.createElement("td");
        const textNode = document.createTextNode(personObject[personProperty]);
        tableData.appendChild(textNode);
        tableRow.appendChild(tableData); 
    }

    personTableBody.appendChild(tableRow);
}
