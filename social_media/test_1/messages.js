// Fetch JSON data for contacts
fetch('contacts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayContacts(data.contacts);
  });

// Display contacts on the page
function displayContacts(contacts) {
    var recipientSelect = document.getElementById('recipient-select');
    for (var i = 0; i < contacts.length; i++) {
        var contact = contacts[i];
        var option = document.createElement('option');
        option.value = contact.username;
        option.innerHTML = contact.username;
        recipientSelect.appendChild(option);
    }
}

//Handle message form submission
var messageForm = document.querySelector('form');
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var recipient = document.getElementById('recipient-select').value;
    var messageText = document.getElementById('message-text').value;
    var date = new Date();
    date = date.toString();
    var message = {
        recipient: recipient,
        text: messageText,
        date: date
    }
    var messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.unshift(message);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages(messages);
});

// Display messages on the page
function displayMessages(messages) {
    var messageThreads = document.getElementById('message-threads');
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message-thread');
        var messageText = document.createElement('p');
        messageText.innerText = message.text;
        messageDiv.appendChild(messageText);
        var messageRecipient = document.createElement('p');
        messageRecipient.innerText = message.recipient;
        messageDiv.appendChild(messageRecipient);
        var messageDate = document.createElement('p');
        messageDate.innerText = message.date;
        messageDiv.appendChild(messageDate);
        messageThreads.appendChild(messageDiv);
    }
}
