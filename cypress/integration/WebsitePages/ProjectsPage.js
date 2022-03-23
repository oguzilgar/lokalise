class ProjectsPage {
  static is_newProject_button_displayed() {
    cy.get(`button[data-name='add-project'] span span`)
      .contains(`New project`)
      .should(`be.visible`);
    cy.task(`log`, `New project button is displayed`);
  }

  static click_newProject_button() {
    cy.get(`button[data-name='add-project'] span span`)
      .contains(`New project`)
      .click();
    cy.task(`log`, `New project button is clicked`);
  }

  static is_only_one_project_exist() {
    cy.get(
      `[data-rbd-droppable-id='droppable'] [data-name='project-container']`
    )
      .its("length")
      .should("be.gt", 0);
    cy.get(
      `[data-rbd-droppable-id='droppable'] [data-name='project-container']`
    )
      .its("length")
      .should("eq", 1);
    cy.task(`log`, `only one single project is displayed`);
  }

  static is_more_than_one_project_displayed_on_projectPage() {
    cy.get(
      `[data-rbd-droppable-id='droppable'] [data-name='project-container']`
    )
      .its("length")
      .should("be.gt", 1);
    cy.task(`log`, `More than one project are displayed `);
  }

  static is_projectName_displayed_on_projectPage(projectName) {
    cy.get(`div[data-name='project-container'] [data-name='project-sidebar'] a`)
      .contains(`${projectName}`)
      .should(`be.visible`);
    cy.task(`log`, `Project name is displayed on project page`);
  }

  static check_projects_order_and_count(
    expectedProjectsList,
    newlyCreatedproject
  ) {
    expectedProjectsList.push(newlyCreatedproject);
    cy.get(`.sc-ekA-drt .sc-hcmsbg`).should((actualProjectsList) => {
      const elsText = actualProjectsList.toArray().map((el) => el.innerText);
      expect(elsText).to.deep.eq(expectedProjectsList);

      expect(elsText)
        .to.have.ordered.members(expectedProjectsList)
        .but.not.have.ordered.members([
          newlyCreatedproject,
          expectedProjectsList[0],
        ]);
    });
    cy.task(`log`, `Projects order and count successfully displayed`);
  }

  static is_more_button_displayed() {
    cy.get(`.sc-bQCEYZ`).last().should(`be.visible`);
    cy.task(`log`, `More button is displayed`);
  }

  static click_more_button() {
    cy.get(`.sc-bQCEYZ`).last().click();
    cy.task(`log`, `More button is clicked`);
  }

  static is_last_more_button_popUp_displayed() {
    cy.get(`[aria-label='More...']`)
      .last()
      .should(`have.attr`, `aria-expanded`, `true`);

    cy.get(`.sc-eGJWMs  .sc-csTbgd [aria-label='Settings']`)
      .last()
      .contains(`Settings`)
      .should(`be.visible`);
    cy.task(`log`, `More button popUp is displayed`);
  }

  static click_last_more_button_popUp() {
    cy.get(`.sc-eGJWMs  .sc-csTbgd [aria-label='Settings']`)
      .last()
      .contains(`Settings`)
      .click();
    cy.task(`log`, `More button popUp is clicked`);
  }

  static is_project_deleted_alert_displayed() {
    cy.get(`.alert.dismissable.alert-success`).should(`be.visible`);
    cy.task(`log`, `Project deleted. is displayed`);
  }

  static click_project_title(projectName) {
    cy.get(`.sc-bwcZwS .sc-dlMDgC`).contains(projectName).click();
    cy.task(`log`, `Project name is clicked`);
  }

  static is_first_project_has_no_keyValue() {
    cy.get(`.sc-dkuGKe`)
      .contains(`Keys`)
      .next()
      .contains(`0`)
      .should(`be.visible`);
    cy.task(`log`, `Project name is clicked`);
  }

  static is_first_project_has_keyValue(keyValue) {
    cy.get(`.sc-dkuGKe`)
      .contains(`Keys`)
      .next()
      .contains(`${keyValue}`)
      .should(`be.visible`);
    cy.task(`log`, `key value is displayed as ${keyValue}`);
  }
}
export default ProjectsPage;
