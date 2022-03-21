class EditorPage {

  static is_editorPage_displayed() {
    cy.get(`li[data-testid='edit']`)
      .should(`have.attr`, `aria-selected`, `true`);
    cy.get(`h1`)
      .contains(`Ready to add content?`)
      .should(`be.visible`);
    cy.task(`log`, `editor page is displayed`);
  }

  static is_addKey_button_displayed() {
    cy.get(`[aria-label='Add first key'] span span`)
      .contains(`Add key`)
      .should(`be.visible`);
    cy.task(`log`, `Add key button is displayed`);
  }

  static click_addKey_button() {
    cy.get(`[aria-label='Add first key'] span span`)
      .contains(`Add key`)
      .click();
    cy.task(`log`, `Add key button is clicked`);
  }

  static is_key_editor_displayed() {
    cy.get(`h4`)
      .contains(`Key editor`)
      .should(`be.visible`);
    cy.task(`log`, `Key editor is displayed`);
  }

  static is_general_selected() {
    cy.get(`.active #general_tab`)
      .contains(`General`)
      .should(`be.visible`);
    cy.task(`log`, `General is selected`);
  }

  static is_key_input_box_displayed() {
    cy.get(`#keyName`)
      .should(`be.visible`);
    cy.task(`log`, `Key input box is displayed`);
  }

  static type_a_key(key) {
    cy.get(`#keyName`)
      .type(key);
    cy.task(`log`, `Key is typed`);
  }

  static is_platform_box_displayed() {
    cy.get(`#s2id_autogen6`)
      .should(`be.visible`);
    cy.task(`log`, `platform box is displayed`);
  }

  static type_a_platform(platform) {
    cy.get(`.select2-search-field input`)
      .eq(1)
      .type(platform);
    cy.task(`log`, `platform is typed`);
  }

  static select_first_platform() {
    cy.get(`.select2-results li[role="presentation"]`)
      .first()
      .click();
    cy.task(`log`, `first_platform is selected`);
  }

  static is_save_button_displayed() {
    cy.get(`#btn_addkey`)
      .contains(`Save`)
      .should(`be.visible`);
    cy.task(`log`, `save button is displayed`);
  }

  static click_save_button() {
    cy.get(`#btn_addkey`)
      .contains(`Save`)
      .click();
    cy.task(`log`, `save button is clicked`);
  }

  static is_count_of_key_correct_as_one() {
    //cy.reload();
    //cy.waitUntil(() => cy.get(`#header-key-count`, { timeout: 15000 }).should(`be.visible`));
    //cy.get(`#header-key-count`)
    //  .should(`have.text`, `1`);

    cy.waitUntil(() => cy.get(`#endless .thekey`, { timeout: 15000 }).should(`be.visible`));
    cy.get(`#endless .thekey`)
      .its('length').should('eq', 1);

    cy.get(`#endless [data-value='Lokalise']`)
      .should(`be.visible`);
    cy.task(`log`, `key count is one`);
  }

  static is_delete_key_button_displayed() {
    cy.get(`.key-function-button-wrapper .delete-key`)
      .should(`be.exist`);
    cy.task(`log`, `delete button is displayed`);
  }

  static click_delete_key_button() {
    cy.get(`.key-function-button-wrapper .delete-key`)
      .click();
    cy.task(`log`, `delete button is clicked`);
  }

  static is_delete_key_popUp_displayed(keyName) {
    cy.get(`h4`)
      .contains(`Delete key`)
      .should(`be.visible`);

      cy.get(`.bootbox-body strong`)
      .should(`have.text`,`${keyName}`);
    cy.task(`log`, `delete popUp is displayed`);
  }

  static click_delete_key_button_on_popUp() {
    cy.get(`[data-bb-handler='confirm']`)
      .click();
    cy.task(`log`, `delete button on popUp is clicked`);
  }

}
export default EditorPage;
