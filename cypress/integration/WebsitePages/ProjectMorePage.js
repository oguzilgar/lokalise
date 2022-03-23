class ProjectMorePage {
  static is_morePage_displayed() {
    cy.get(`.sc-dlMDgC span`).contains(`More...`).should(`be.visible`);
    cy.task(`log`, `More page is displayed`);
  }

  static is_settings_selected() {
    cy.get(`.active a`).contains(`Settings`).should(`be.visible`);
    cy.task(`log`, `settings is selected`);
  }

  static is_delete_button_displayed_for_the_project(projectName) {
    cy.get(`.project-delete`)
      .contains(`Delete project`)
      .should(`have.attr`, `data-projectname`, projectName);
    cy.task(`log`, `Delete button is displayed for the project`);
  }

  static click_delete_button_for_the_project(projectName) {
    cy.get(`.project-delete`)
      .contains(`Delete project`)
      .should(`have.attr`, `data-projectname`, projectName)
      .click();
    cy.task(`log`, `Delete button is displayed for the project`);
  }

  static is_confirm_delete_popUp_displayed(projectName) {
    cy.get(`h4[class='modal-title']`)
      .contains(`Are you ABSOLUTELY sure?`)
      .should(`be.visible`);

    cy.get(`.delete-popup strong`).last().should(`have.text`, projectName);
    cy.task(`log`, `confirm delete popUp is displayed for the project`);
  }

  static is_confirm_projectName_box_displayed() {
    cy.get(`.bootbox-form .bootbox-input`).should(`be.visible`);
    cy.task(`log`, `confirm project name box is displayed`);
  }

  static type_projectName_to_confirm_delete(projectName) {
    cy.get(`.bootbox-form .bootbox-input`).type(projectName);
    cy.task(`log`, `${projectName} is typed`);
  }

  static click_delete_button() {
    cy.get(`[data-bb-handler='confirm']`).click();
    cy.task(`log`, `delete button is clicked`);
  }
}
export default ProjectMorePage;
