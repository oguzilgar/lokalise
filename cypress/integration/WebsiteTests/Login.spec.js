import LoginPage from "../WebsitePages/LoginPage";

const environment = Cypress.env(`environment`);
const {
  baseUrl: baseUrlEnv
} = Cypress.env()[environment];

describe(`Take Home Assignment`, () => {
  before(() => {
    cy.task(`log`, `environment: ${environment}`);
  });

  let user;
  beforeEach(() => {
    cy.fixture(environment).then((environmentData) => {
      user = environmentData;
    });
    cy.clearLocalStorage();
    cy.visit(`${baseUrlEnv}`);
    cy.is_page_loaded_successfully(`login`);
  });

  it(`The user should be able to add first project`, function() {
    cy.task(`log`, `${environment}.json`);

    LoginPage.is_LoginPage_Displayed_Successfully();
    cy.login_with_email_and_password(user.signin.user_1.testEmail, user.signin.user_1.testPassword);

  });

});
