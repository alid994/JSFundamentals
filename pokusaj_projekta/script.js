function post() {
    let unos = document.getElementById("unos").value;
    let para = document.createElement("p");
    const node = document.createTextNode(unos);
    para.appendChild(node);

    const element = document.getElementById("objava");
    element.appendChild(para);
    console.log(unos);
}