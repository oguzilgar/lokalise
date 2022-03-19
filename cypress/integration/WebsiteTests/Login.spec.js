import LoginPage from "../WebsitePages/LoginPage";
import SignUpPage from "../WebsitePages/SignUpPage";
import WelcomePage from "../WebsitePages/WelcomePage";
import QuickStartPage from "../WebsitePages/QuickStartPage";
import CreateTranslationProjectPage from "../WebsitePages/CreateTranslationProjectPage";


import {
  SignUpEmail,
  SignUpFullName,
  SignUpPassword,
  userCompanyName
} from "../../support/Helpers/index";

const environment = Cypress.env(`environment`);
const {
  baseUrl: baseUrlEnv
} = Cypress.env()[environment];

describe(`Take Home Assignment`, () => {
  before(() => {
    cy.task(`log`, `environment: ${environment}`);
  });

  let user;
  beforeEach(() => {
    cy.fixture(environment).then((environmentData) => {
      user = environmentData;
    });
    cy.clearLocalStorage();
    cy.visit(`${baseUrlEnv}`);
    cy.is_page_loaded_successfully(`login`);
  });

  it(`The user should be able to add first project`, function () {
    cy.task(`log`, `${environment}.json`);

    const userFullName = SignUpFullName();

    LoginPage.is_loginPage_displayed_successfully();
    LoginPage.is_signUp_link_displayed();
    LoginPage.click_signUp_link();

    cy.is_page_loaded_successfully(`signup`);
    SignUpPage.is_signUp_page_displayed_successfully();
    cy.signUp_with_email_and_password(
      userFullName,
      SignUpEmail(user.signin.user_1.testEmailLength),
      SignUpPassword(user.signin.user_1.testPasswordLength));

    cy.is_page_loaded_successfully(`welcome`);
    WelcomePage.is_welcome_page_displayed_successfully();
    WelcomePage.type_name_of_company(userCompanyName());
    WelcomePage.select_size_of_company(user.companySizeOptions.value_2);
    WelcomePage.clickContinue();

    cy.is_page_loaded_successfully(`welcome`);
    WelcomePage.is_welcome_page_displayed_with_three_more_questions_successfully();
    WelcomePage.is_work_types_displayed(user.workTypes);
    WelcomePage.select_work_type(user.workTypes[2]);

    cy.is_page_loaded_successfully(`welcome`);
    WelcomePage.is_welcome_page_displayed_with_two_more_questions_successfully();
    WelcomePage.is_main_goals_displayed(user.mainGoalWithLokalise);
    WelcomePage.select_main_goal(user.mainGoalWithLokalise[2]);

    cy.is_page_loaded_successfully(`welcome`);
    WelcomePage.is_welcome_page_displayed_with_last_question_successfully();
    WelcomePage.is_complete_signUp_displayed_as_disabled();
    WelcomePage.is_content_types_displayed(user.contentTypes);
    WelcomePage.select_content_type(user.contentTypes[2]);
    WelcomePage.is_complete_signUp_displayed_as_enabled();
    WelcomePage.click_complete_signUp();

    cy.is_page_loaded_successfully(`quick-start`);
    QuickStartPage.is_quick_start_page_displayed_successfully(userFullName);
    QuickStartPage.click_create_sample_project();

    CreateTranslationProjectPage.is_create_translation_project_popup_displayed();
    CreateTranslationProjectPage.is_projectName_filled_containing_userName(userFullName);
    CreateTranslationProjectPage.type_target_language(user.targetLanguages[2]);
    CreateTranslationProjectPage.click_proceed_button();
    QuickStartPage.is_quick_start_step_1_completed();
    QuickStartPage.click_close_dialog();
    QuickStartPage.is_projectName_displayed(userFullName);
    cy.click_localise();
    cy.is_first_project_created(userFullName, user.targetLanguages[2]);
  });



});
