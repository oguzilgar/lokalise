//Cypress commands
import 'cypress-wait-until';

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
  cy.contains(`${userFullName}’s first project`).should(`be.visible`);
  cy.contains(`Done`).should(`be.visible`);
  cy.contains(`Base words`).should(`be.visible`);
  cy.contains(`Team`).should(`be.visible`);
  cy.contains(`Keys`).should(`be.visible`);
  cy.contains(language).should(`be.visible`);
  cy.task(`log`, `created project is displayed`);
});

Cypress.Commands.add(`logOut`, () => {
  cy.get(`button[aria-label='Profile menu']`)
    .should(`be.exist`)
    .should(`be.visible`);
  cy.task(`log`, `profile menu is displayed`);

  cy.get(`button[aria-label='Profile menu']`).click();
  cy.task(`log`, `profile menu is clicked`);

  cy
    .contains(`Create new team`)
    .should(`be.exist`)
    .should(`be.visible`);

  cy
    .contains(`Profile settings`)
    .should(`be.exist`)
    .should(`be.visible`);

  cy
    .contains(`Logout`)
    .should(`be.exist`)
    .should(`be.visible`);
  cy.task(`log`, `logout is displayed`);

  cy.contains(`Logout`).click();
  cy.task(`log`, `logout is clicked`);
});

Cypress.Commands.add(`is_logged_out_successfully`, (endPoint) => {
  cy.url().should(`include`, `${endPoint}`);
  cy.get(`input[placeholder='user@company.com']`).should(`be.visible`);
  cy.get(`input[placeholder='password']`).should(`be.visible`);
  cy.get(`button`)
    .contains(`Log in`)
    .should(`be.visible`);
  cy.task(`log`, `Logged out successfully with endpoint - ${endPoint}`);
});

Cypress.Commands.add(`is_only_one_single_project_created`, () => {
  cy.get(`[data-rbd-droppable-id='droppable'] [data-name='project-container']`)
    .its('length').should('be.gte', 0);
  cy.get(`[data-rbd-droppable-id='droppable'] [data-name='project-container']`)
    .its('length').should('eq', 1);
  cy.task(`log`, `only one project is displayed `);
});

Cypress.Commands.add(`type_target_language`, (targetLanguage) => {
  cy.get(`#react-select-3-input`).type(targetLanguage).type('{enter}');
  cy.task(`log`, `target language ${targetLanguage} is typed`);
});

Cypress.Commands.add(`click_proceed_button`, () => {
  cy.get(`button span`).contains(`Proceed`).click();
  cy.task(`log`, `Proceed is clicked`);
});

Cypress.Commands.add(`is_firstProjectName_displayed`, (userFullName) => {
  cy.get(`a`)
    .contains(`Projects`)
    .next()
    .contains(`${userFullName}’s first project`)
    .should(`be.visible`);
  cy.task(`log`, `${userFullName}’s first project is displayed`);
});

Cypress.Commands.add(`is_projectName_displayed_on_editorPage`, (userFullName) => {
  cy.get(`a`)
    .contains(`Projects`)
    .next()
    .contains(`${userFullName}`)
    .should(`be.visible`);
  cy.task(`log`, `${userFullName} is displayed`);
});

Cypress.Commands.add(`is_projectsPage_displayed`, () => {
  cy.get(`div[class='nav-item active']`)
    .should(`be.visible`);
  cy.get(`button[data-name='add-project'] span span`)
    .contains(`New project`)
    .should(`be.visible`);
  cy.task(`log`, `Project page is displayed`);
});
