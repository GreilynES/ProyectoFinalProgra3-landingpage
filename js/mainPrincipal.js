import * as principalService from "../services/principal/principal.service.js";

addEventListener("load", async (event) => {
  const principalContainer = document.getElementById('principal-container');
  const principalTemplate = document.getElementById('principal-template').content;

  try {
    const response = await principalService.getAll();
    const principal = await response.json();

    principal.forEach(principalItem => {
      const principalClone = document.importNode(principalTemplate, true);
      principalClone.querySelector('.titleDes').textContent = principalItem.title;
      principalClone.querySelector('.principalDescription').textContent = principalItem.description;
      principalClone.querySelector('.background-image').src = principalItem.image;
      principalContainer.appendChild(principalClone);
    });
  } catch (error) {
    console.error('Error fetching principal data:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There was an error loading the data. Please try again later.';
    principalContainer.appendChild(errorMessage);
  }
});
