class WelcomePage {

  static is_welcome_page_displayed_successfully() {
    cy.contains(`Where do you work, `)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Where do you work, text is displayed`);

    cy.contains(`Name of your company`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Name of your company, text is displayed`);

    cy.contains(`Size of your company`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Size of your company text is displayed`);

    cy.contains(`Continue`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Continue button is displayed`);
  }

  static type_name_of_company(userCompanyName) {
    cy.get(`input[placeholder='Name of your company...']`).clear().type(`${userCompanyName}`);
    cy.task(`log`, `${userCompanyName} is typed`);
  }

  static select_size_of_company(sizeOfCompany) {
    cy.get('select').select(`${sizeOfCompany}`);
    cy.task(`log`, `${sizeOfCompany} is selected`);
  }

  static clickContinue() {
    cy.get(`button`)
      .contains(`Continue`)
      .click();
    cy.task(`log`, `Continue button is clicked`);
  }

  static is_welcome_page_displayed_with_three_more_questions_successfully() {
    cy.contains(`What kind of work do you do?`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `What kind of work do you do?, text is displayed`);

    cy.contains(`Only 3 more questions left`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Only 3 more questions left, text is displayed`);

    cy.contains(` Back`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, ` Back, text is displayed`);
  }

  static is_work_types_displayed(expectedTypesOfWorks) {
    cy.get("h4").should(els => {
      const actualTypesOfWorks = els.toArray().map(el => el.innerText);
      expect(expectedTypesOfWorks).to.include.members(actualTypesOfWorks)
    });
  }

  static is_main_goals_displayed(expectedMainGoals) {
    cy.get("h4").should(els => {
      const actualMainGoals = els.toArray().map(el => el.innerText);
      expect(expectedMainGoals).to.include.members(actualMainGoals)
    });
  }

  static is_content_types_displayed(expectedContentTypes) {
    cy.get("h4").should(els => {
      const actualContentTypes = els.toArray().map(el => el.innerText);
      expect(expectedContentTypes).to.include.members(actualContentTypes)
    });
  }

  static select_work_type(workType) {
    cy.get("h4").contains(workType).click();
    cy.task(`log`, `${workType} is selected`);
  }

  static select_main_goal(mainGoal) {
    cy.get("h4").contains(mainGoal).click();
    cy.task(`log`, `${mainGoal} is selected`);
  }

  static select_content_type(contentType) {
    cy.get("h4").contains(contentType).click();
    cy.task(`log`, `${contentType} is selected`);
  }

  static is_welcome_page_displayed_with_two_more_questions_successfully() {
    cy.contains(`What is your main goal with Lokalise?`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `What is your main goal with Lokalise?, text is displayed`);

    cy.contains(`2 questions left`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `2 questions left, text is displayed`);

    cy.contains(` Back`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, ` Back, text is displayed`);
  }

  static is_welcome_page_displayed_with_last_question_successfully() {
    cy.contains(`Where’s your content now?`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Where’s your content now?, text is displayed`);

    cy.contains(`Last question`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Last question, text is displayed`);

    cy.contains(` Back`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, ` Back, text is displayed`);
  }

  static is_complete_signUp_displayed_as_disabled() {
    cy.get("button").contains("Complete sign up").should(`have.attr`,`disabled`);
    cy.task(`log`, `Complete sign up is displayed as disabled`);
  }

  static is_complete_signUp_displayed_as_enabled() {
    cy.get("button").contains("Complete sign up").should(`not.have.attr`,`disabled`);
    cy.task(`log`, `Complete sign up is displayed as enabled`);
  }

  static click_complete_signUp() {
    cy.get("button").contains("Complete sign up").click();
    cy.task(`log`, `Complete sign up is clicked`);
  }
}
export default WelcomePage;
