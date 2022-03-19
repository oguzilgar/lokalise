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
  });
