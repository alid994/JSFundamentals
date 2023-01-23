// Fetch the JSON data for the destinations
fetch('destinations.json')
  .then(response => response.json())
  .then(data => {
    // Get the element where the destination cards will be added
    const destinationCardsContainer = document.getElementById('destination-cards');
    // Loop through the destinations and add a card for each one
    data.destinations.forEach(destination => {
      // Create a new div element for the destination card
      const destinationCard = document.createElement('div');
      destinationCard.classList.add('destination-card');
      // Add the destination name
      const destinationName = document.createElement('h3');
      destinationName.innerHTML = destination.name;
      destinationCard.appendChild(destinationName);
      // Add the destination image
      const destinationImage = document.createElement('img');
      destinationImage.src = destination.image;
      destinationCard.appendChild(destinationImage);
      // Add the destination description
      const destinationDescription = document.createElement('p');
      destinationDescription.innerHTML = destination.description;
      destinationCard.appendChild(destinationDescription);
      // Add the destination activities
      const destinationActivities = document.createElement('ul');
      destination.activities.forEach(activity => {
        const destinationActivity = document.createElement('li');
        destinationActivity.innerHTML = activity;
        destinationActivities.appendChild(destinationActivity);
      });
      destinationCard.appendChild(destinationActivities);
      // Add the destination card to the container
      destinationCardsContainer.appendChild(destinationCard);
    });
  });
