import * as servicesLService from "../services/servicesL/servicesL.service.js";

addEventListener("load", async (event) => {
  const servicesContainer = document.getElementById('services-container');
  const servicesLTemplate = document.getElementById('services-template').content;

  try {
    const response = await servicesLService.getAll();
    const servicesL = await response.json();

    servicesL.forEach(servicesLItem => {
      const servicesLClone = document.importNode(servicesLTemplate, true);
      servicesLClone.querySelector('.titleScoment').textContent = servicesLItem.title;
      servicesLClone.querySelector('.descriptionS').textContent = servicesLItem.description;
      servicesLClone.querySelector('.imgServices').src = servicesLItem.image;
      servicesContainer.appendChild(servicesLClone);
    });
  
  } catch (error) {
    console.error('Error fetching principal data:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There was an error loading the data. Please try again later.';
    servicesContainer.appendChild(errorMessage);
  }
});