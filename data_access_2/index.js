const modal = document.getElementById("modal");
const dodajDugme = document.getElementById("dodajDugme");
const ponistiDugme = document.getElementById("ponisti-dugme");
const spasiDugme = document.getElementById("spasi-dugme");
const naslovUnos = document.getElementById("unesi-naslov");
const opisUnos = document.getElementById("unesi-opis");
const todoContainer = document.getElementById("todo-container");


if ( !!modal ) {
    modal.style.display = "none";
}


if(!!dodajDugme) {
    dodajDugme.addEventListener('click', function(){
        if (!!modal) {
            modal.style.display = "flex"
        }
    })
}

const ponistiModal = function() {
    if (!!naslovUnos) naslovUnos.value = "";
    if (!!opisUnos) opisUnos.value = "";
    if (!!modal) modal.style.display ="none";
}


if (!!ponistiDugme) {
    ponistiDugme.addEventListener("click", function() {
        ponistiModal();
    });
}

if (!!spasiDugme) {
    spasiDugme.addEventListener("click", function() {
        const title = naslovUnos.value;
        const description = opisUnos.value;

        const body = {
            title,
            description
        };

        const poziv = new XMLHttpRequest();
        poziv.onreadystatechange = function() {
            if(poziv.readyState === 4) {
                if(poziv.status === 200 || poziv.status === 201 ){
                    if(!!todoContainer) {
                        kreirajKarticu(title, description)
                    }
            }else {
                console.log("Greška")
            }
            }
        }
poziv.open( 'POST', 'https://jsonplaceholder.typicode.com/posts', true);
poziv.send(body);

        ponistiModal();
    })
}

function kreirajKarticu(title, description) {
    const div = document.createElement("div");
    div.className = "d-flex flex-column gap-3 pad-3 todo";

    const titleElement = document.createElement("h5");
    titleElement.innerHTML = title;

    const descriptionElement = document.createElement("span");
    descriptionElement.innerHTML = description;

    div.append(titleElement);
    div.append(descriptionElement);

    if(!!todoContainer) todoContainer.append(div);
}

async function ucitajToDoStavke() {
    try {
        const odgovor = await fetch("https://jsonplaceholder.typicode.com/posts");
        const podaci = await odgovor.json()
        for( let i = 0; i < 10; i++) {
            kreirajKarticu(podaci[i]?.title, podaci[i]?.body);
        }
    } catch (error) {
        console.log(error);
    }
}

ucitajToDoStavke();