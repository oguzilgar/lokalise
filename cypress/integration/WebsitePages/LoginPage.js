class LoginPage {
  static is_loginPage_displayed_successfully() {
    cy.contains(`Work e-mail`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Work e-mail text is displayed`);

    cy.contains(`Password`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Password text is displayed`);

    cy.get(`button`).contains(`Log in`).should(`be.exist`).should(`be.visible`);
    cy.task(`log`, `Log in button is displayed`);
  }

  static is_signUp_link_displayed() {
    cy.contains(`Not registered? Sign up`)
      .should(`be.exist`)
      .should(`be.visible`);
    cy.task(`log`, `Not registered? Sign up text is displayed`);

    cy.contains(`Not registered? Sign up`).should(
      `have.attr`,
      `href`,
      `/signup`
    );
    cy.task(`log`, `/signup link is displayed`);
  }

  static click_signUp_link() {
    cy.contains(`Not registered? Sign up`).click();
    cy.task(`log`, `/signup link is clicked`);
  }
}
export default LoginPage;
