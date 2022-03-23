class SignUpPage {
  static is_signUp_page_displayed_successfully() {
    cy.contains(`Full name`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Full name text is displayed`);

    cy.contains(`Work e-mail`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Work e-mail text is displayed`);

    cy.contains(`Password`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Password text is displayed`);

    cy.get(`button`)
      .contains(`Sign up`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Sign up button is displayed`);
  }
}
export default SignUpPage;
