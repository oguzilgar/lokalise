import { TIMEOUTS } from "../../support/Helpers/constants";

class EditorPage {
  static is_editorPage_displayed() {
    cy.get("li[data-testid='edit']").should(
      "have.attr",
      "aria-selected",
      "true"
    );
    cy.task("log", "editor page is displayed");
  }

  static is_addKey_button_displayed() {
    cy.get("[aria-label='Add first key'] span span")
      .contains("Add key")
      .should("be.visible");
    cy.task("log", "Add key button is displayed");
  }

  static click_addKey_button() {
    cy.get("[aria-label='Add first key'] span span")
      .contains("Add key")
      .click();
    cy.task("log", "Add key button is clicked");
  }

  static is_key_editor_displayed() {
    cy.get("h4").contains("Key editor").should("be.visible");
    cy.task("log", "Key editor is displayed");
  }

  static is_general_selected() {
    cy.get(".active #general_tab").contains("General").should("be.visible");
    cy.task("log", "General is selected");
  }

  static is_key_input_box_displayed() {
    cy.get("#keyName").should("be.visible");
    cy.task("log", "Key input box is displayed");
  }

  static type_a_key(key) {
    cy.get("#keyName").type(key);
    cy.task("log", "Key is typed");
  }

  static is_platform_box_displayed() {
    cy.get("#s2id_autogen6").should("be.visible");
    cy.task("log", "platform box is displayed");
  }

  static type_a_platform(platform) {
    cy.get(".select2-search-field input").eq(1).type(platform);
    cy.task("log", "platform is typed");
  }

  static select_first_platform() {
    cy.get('.select2-results li[role="presentation"]').first().click();
    cy.task("log", "first_platform is selected");
  }

  static is_save_button_displayed() {
    cy.get("#btn_addkey").contains("Save").should("be.visible");
    cy.task("log", "save button is displayed");
  }

  static click_save_button() {
    cy.get("#btn_addkey").contains("Save").click();
    cy.task("log", "save button is clicked");
  }

  static is_count_of_key_correct_as_one(keyName) {
    cy.waitUntil(() =>
      cy.get("#endless .thekey", { timeout:TIMEOUTS.WAIT_ENDPOINT }).should("be.visible")//page loads 15 sec sometimes
    );
    cy.get("#endless .thekey").its("length").should("eq", 1);

    cy.get(`#endless [data-value='${keyName}']`).should("be.visible");
    cy.task("log", "key count is one");
  }

  static is_delete_key_button_displayed() {
    cy.get(".key-function-button-wrapper .delete-key").should("be.exist");
    cy.task("log", "delete button is displayed");
  }

  static click_delete_key_button() {
    cy.get(".key-function-button-wrapper .delete-key").click();
    cy.task("log", "delete button is clicked");
  }

  static is_delete_key_popUp_displayed(keyName) {
    cy.get("h4").contains("Delete key").should("be.visible");

    cy.get(".bootbox-body strong").should("have.text", `${keyName}`);
    cy.task("log", "delete popUp is displayed");
  }

  static click_delete_key_button_on_popUp() {
    cy.get("[data-bb-handler='confirm']").click();
    cy.task("log", "delete button on popUp is clicked");
  }

  static is_project_base_language_displayed(keyName, projectBaseLanguage) {
    cy.get(`[data-name='${keyName}'] .cell-trans-lang small`)
      .first()
      .find("strong")
      .should("have.text", `${projectBaseLanguage}`);
    cy.task("log", `${projectBaseLanguage} is displayed as base language`);
  }

  static is_project_target_language_displayed(keyName, projectTargetLanguage) {
    cy.get(`[data-name='${keyName}'] .cell-trans-lang small`)
      .last()
      .contains(`${projectTargetLanguage}`)
      .should("be.visible");
    cy.task("log", `${projectTargetLanguage} is displayed as target language`);
  }

  static is_the_key_empty(keyName) {
    cy.waitUntil(() =>
      cy
        .get(`[data-name='${keyName}'] .empty`, { timeout:TIMEOUTS.WAIT_ENDPOINT })
        .should("be.visible")
    );

    cy.get(`[data-name='${keyName}'] .empty`)
      .first()
      .should("have.text", "Empty");

    cy.get(`[data-name='${keyName}'] .empty`)
      .last()
      .should("have.text", "Empty");

    cy.get(`[data-name='${keyName}'] .empty`).should("have.length", 2);
    cy.task("log", `The key ${keyName} is empty`);
  }

  static is_the_plural_key_empty(keyName) {
    cy.waitUntil(() =>
      cy
        .get(`[data-name='${keyName}'] .empty`, { timeout:TIMEOUTS.WAIT_ENDPOINT })
        .should("be.visible")
    );

    cy.get(`[data-name='${keyName}'] .empty`)
      .first()
      .should("have.text", "Empty");

    cy.get(`[data-name='${keyName}'] .empty`)
      .last()
      .should("have.text", "Empty");

    cy.get(`[data-name='${keyName}'] .empty`).should("have.length", 4);
    cy.task("log", `The plural key ${keyName} is empty`);
  }

  static is_the_key_empty_indexOf(keyIndexOf, keyName) {
    cy.waitUntil(() =>
      cy
        .get(`[data-name='${keyName}'] .empty`, { timeout:TIMEOUTS.WAIT_ENDPOINT })
        .should("be.visible")
    );

    cy.get(`[data-name='${keyName}'] .empty`)
      .eq(keyIndexOf)
      .should("have.text", "Empty");
    cy.task("log", `The first key ${keyName} is empty`);
  }

  static click_empty_text_with_indexOf(textIndex, keyName) {
    cy.get(`[data-name='${keyName}'] .empty`).eq(textIndex).click();
    cy.task("log", "Empty text is clicked");
  }

  static click_base_language_value(keyName, translation) {
    cy.get(`[data-name='${keyName}'] div`).contains(translation).click();
    cy.wait(TIMEOUTS.WAIT_LOAD);
    cy.task("log", "base language value is clicked");
  }

  static type_translation_for_base_language(keyName, translation) {
    cy.get(`[data-name='${keyName}'] .CodeMirror-line`)
      .first()
      .type(translation);
    cy.task("log", `${translation} is typed for base language`);
  }

  static clear_translation() {
    cy.waitUntil(() =>
      cy
        .get(".lokalise-editor-wrapper.active .CodeMirror-code span")
        .should("be.visible")
    );

    cy.get(".lokalise-editor-wrapper.active .CodeMirror-code span")
      .type("{selectAll}")
      .type("{del}");
    cy.task("log", "translation is cleaned");
  }

  static is_typed_translation_displayed(translation) {
    cy.waitUntil(() =>
      cy
        .get(`[data-lokalise-editor-value='${translation}']`, {
          timeout: 20000,
        })
        .should("be.visible")
    );
    cy.get(`[data-lokalise-editor-value='${translation}']`).should(
      "be.visible"
    );
    cy.task("log", `${translation} is displayed`);
  }

  static click_target_language(keyName) {
    cy.get(`[data-name='${keyName}'] .empty`).last().click();
    cy.task("log", "base language box is clicked");
  }

  static type_translation_for_target_language(keyName, translation) {
    cy.get(`[data-name='${keyName}'] .CodeMirror-line`)
      .last()
      .type(translation);
    cy.task("log", `${translation} is typed for target language`);
  }

  static click_to_save_translation() {
    cy.wait(TIMEOUTS.WAIT_LOAD);
    cy.get(".editor-icon-button.save").click();
    cy.task("log", "save button is clicked");
  }

  static is_base_words_count_of(wordCount) {
    cy.get("#header-source-word-count").should("have.text", `${wordCount}`);
    cy.task("log", `base words count is ${wordCount}`);
  }

  static is_plural_icon_displayed() {
    cy.get(".label-plural").contains("PLURAL").should("be.visible");
    cy.task("log", "PLURAL label is displayed");
  }

  static is_plural_key_fields_displayed(keyName, expectedPlurallabelList) {
    cy.get(`[data-name='${keyName}'] .lokalise-plural-key`).should(
      "have.length",
      4
    );

    cy.get(`[data-name='${keyName}'] .lokalise-plural-key`).should(
      (actualplurallabelList) => {
        const elsText = actualplurallabelList
          .toArray()
          .map((el) => el.innerText);
        expect(elsText).to.deep.eq(expectedPlurallabelList);
      }
    );
    cy.task("log", "plural label list is correct");
  }

  static is_plural_popUp_displayed() {
    cy.get(".popup-title").should("be.visible");
    cy.get(".editor-icon-button.save").should("be.visible");
    cy.task("log", "Plural popUp is displayed");
  }

  static type_plural_popUp_input(translation) {
    cy.get(".CodeMirror-code [role='presentation']").first().type(translation);
    cy.task("log", `${translation} is typed`);
  }
}
export default EditorPage;
