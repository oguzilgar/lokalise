class QuickStartPage {

  static is_quick_start_page_displayed_successfully(userFullName) {
    cy.contains(`Let’s get you set up with Lokalise.`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Let’s get you set up with Lokalise., text is displayed`);

    cy.contains(`Quick start`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Quick start, text is displayed`);

    cy.get(`h1`).should(`have.text`, `Hi, ${userFullName} 👋`)
    cy.task(`log`, `The user name ${userFullName} with a text is displayed`);
  }

  static is_quick_start_step_1_completed() {
    cy.get(`[aria-label='Step 1 completed']`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Step 1 completed is displayed`);
  }

  static click_create_sample_project() {
    cy.get(`span`)
      .contains(`Create a project`)
      .click();
    cy.task(`log`, `Create sample project button is clicked`);
  }

  static click_close_dialog() {
    cy.get(`h2`)
      .contains(`Quick start`)
      .next()
      .click();
    cy.task(`log`, `close dialog is clicked`);//scarlet scarlet’s first project
  }

  static is_projectName_displayed(userFullName) {
    cy.get(`a`)
      .contains(`Projects`)
      .next()
      .contains(`${userFullName}’s first project`)
    cy.task(`log`, `${userFullName}’s first project is displayed`);
  }
}
export default QuickStartPage;
