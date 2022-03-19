class LoginPage {
  static is_LoginPage_Displayed_Successfully() {
    cy.contains(`Work e-mail`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Work e-mail text is displayed`);

    cy.contains(`Password`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Password text is displayed`);

    cy.get(`button`)
      .contains(`Log in`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Log in button is displayed`);

  }
}
export default LoginPage;
