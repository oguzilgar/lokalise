class CreateTranslationProjectPage {

  static is_create_translation_project_popup_displayed() {
    cy.get(`h2`)
      .contains(`Create translation project`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Create translation project, text is displayed`);

    cy.get(`button span`)
      .contains(`Proceed`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `proceed button is displayed`);
  }

  static is_projectName_filled_containing_userName(userFullName) {
    cy.get(`input`).should(`have.attr`, `name`, `name`);
    cy.get(`input`).should(`have.attr`, `value`, `${userFullName}’s first project`);
    cy.task(`log`, `project name is filled containing user name userFullNam: ${userFullName}`);
  }

  static type_target_language(targetLanguage) {
    cy.get(`#react-select-3-input`).type(targetLanguage).type('{enter}');
    cy.task(`log`, `target language ${targetLanguage} is typed`);
  }

  static click_proceed_button() {
    cy.get(`button span`).contains(`Proceed`).click();
    cy.task(`log`, `Proceed is clicked`);
  }
}
export default CreateTranslationProjectPage;
