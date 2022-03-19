//Cypress commands

Cypress.Commands.add(`is_page_loaded_successfully`, (endPoint) => {
  cy.url().should(`include`, `${endPoint}`);
  cy.task(`log`, `Page loaded successfully with endpoint - ${endPoint}`);
});

Cypress.Commands.add(`login_with_email_and_password`, (userEmail, userPassword) => {
  cy.get(`input[placeholder='user@company.com']`).should(`be.visible`);
  cy.task(`log`, `user@company.com input box is displayed`);

  cy.get(`input[placeholder='user@company.com']`).clear().type(`${userEmail}`);
  cy.task(`log`, `${userEmail} is typed`);

  cy.get(`input[placeholder='password']`).should(`be.visible`);
  cy.task(`log`, `password input box is displayed`);

  cy.get(`input[placeholder='password']`).clear().type(`${userPassword}`);
  cy.task(`log`, `${userPassword} is typed`);

  cy.get(`button`)
    .contains(`Log in`)
    .should(`be.visible`)
    .click();
  cy.task(`log`, `Log in button is clicked`);
});

Cypress.Commands.add(`signUp_with_email_and_password`, (userFullName, userEmail, userPassword) => {
  cy.get(`input[placeholder='Your full name']`).should(`be.visible`);
  cy.task(`log`, `user@company.com input box is displayed`);

  cy.get(`input[placeholder='Your full name']`).clear().type(`${userFullName}`);
  cy.task(`log`, `${userFullName} is typed`);

  cy.get(`input[placeholder='you@company.com']`).should(`be.visible`);
  cy.task(`log`, `user@company.com input box is displayed`);

  cy.get(`input[placeholder='you@company.com']`).clear().type(`${userEmail}`);
  cy.task(`log`, `${userEmail} is typed`);

  cy.get(`input[placeholder='password']`).should(`be.visible`);
  cy.task(`log`, `password input box is displayed`);

  cy.get(`input[placeholder='password']`).clear().type(`${userPassword}`);
  cy.task(`log`, `${userPassword} is typed`);

  cy.get(`button`)
    .contains(`Sign up`)
    .should(`be.visible`)
    .click();
  cy.task(`log`, `Sign up button is clicked`);
});

Cypress.Commands.add(`is_loggedIn_successfully`, (endPoint) => {
  cy.url().should(`include`, `${endPoint}`);
  cy.task(`log`, `LoggedIn successfully with endpoint - ${endPoint}`);
});

Cypress.Commands.add(`click_localise`, () => {
  cy.get(`img[alt='Lokalise']`).click();
  cy.task(`log`, `lokalise is clicked`);
});

Cypress.Commands.add(`is_first_project_created`, (userFullName, language) => {
  cy.get(`a`)
  .contains(`Projects`)
  .next()
  .contains(`${userFullName}’s first project`)
  cy.contains(`Done`).should(`be.visible`);
  cy.contains(`Base words`).should(`be.visible`);
  cy.contains(`Team`).should(`be.visible`);
  cy.contains(`Keys`).should(`be.visible`);
  cy.contains(language).should(`be.visible`);
  cy.task(`log`, `created project is displayed`);
});
