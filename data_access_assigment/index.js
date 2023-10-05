(async () => {
    try {
        let response = await 
fetch('https://www.link-elearning.com/linkdl/coursefiles/1470/quiz.json');
        let text = await response.json();
        const entries = Object.entries(text);

console.log(entries);
        for(let x in entries){
            const pitanje = document.createElement("h1");
            pitanje.innerHTML = text[x];
            const radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            const odgovor = document.createElement( 'label');
            odgovor.innerHTML = text[x];
            document.body.append(pitanje);
            document.body.append(radio);
            document.body.append(odgovor);
            console.log(x)
        }

        console.log(text)
    } catch (err) {
        console.log('Fetch problem: ' + err.message);
    }
})();