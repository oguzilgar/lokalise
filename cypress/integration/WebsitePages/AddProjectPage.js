class AddProjectPage {
  static is_addProject_page_displayed() {
    cy.get(`h2`).contains(`Add project`).should(`be.visible`);

    cy.get(`button span`).contains(`Proceed`).should(`be.visible`);
    cy.task(`log`, `Add project is displayed`);
  }

  static is_create_selected() {
    cy.get(`button[aria-selected='true']`)
      .contains(`Create`)
      .should(`be.visible`);
    cy.task(`log`, `Create is selected`);
  }

  static is_projectNameTitle_displayed_with_nameBox() {
    cy.get(`input[name='name']`).should(`be.visible`);
    cy.get(`input[name='name']`).should(`have.attr`, `value`, ``);
    cy.task(`log`, `Project name title is displayed with name box`);
  }

  static type_name_of_project(userProject) {
    cy.get(`input[name='name']`).clear().type(`${userProject}`);
    cy.task(`log`, `${userProject} is typed`);
  }
}
export default AddProjectPage;
