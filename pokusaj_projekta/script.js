let posts =[];

$("#post-btn").click(function() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(data, status) {
        console.log(data)
    });
});

function postovi () {
    $.get("https://jsonplaceholder.typicode.com/posts", function(data, status) {
        console.log(data)
    });
    let unos = document.getElementById("unos").value;
    let para = document.createElement("p");
    const node = document.createTextNode(unos);
    para.appendChild(node);

    const element = document.getElementById("objava");
    element.appendChild(para);
    console.log(unos);
    
};