import LoginPage from "../WebsitePages/LoginPage";
import SignUpPage from "../WebsitePages/SignUpPage";
import WelcomePage from "../WebsitePages/WelcomePage";
import QuickStartPage from "../WebsitePages/QuickStartPage";
import ProjectsPage from "../WebsitePages/ProjectsPage";
import AddProjectPage from "../WebsitePages/AddProjectPage";
import ProjectMorePage from "../WebsitePages/ProjectMorePage";
import EditorPage from "../WebsitePages/EditorPage";
import CreateTranslationProjectPage from "../WebsitePages/CreateTranslationProjectPage";
import {
  SignUpEmail,
  SignUpFullName,
  SignUpPassword,
  userCompanyName,
  userProjectName,
} from "../../support/Helpers/index";

const environment = Cypress.env(`environment`);
const { baseUrl: baseUrlEnv } = Cypress.env()[environment];

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
  });

  afterEach(() => {
    cy.logOut();
    cy.is_logged_out_successfully(`login`);
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
      SignUpEmail(user.signin.user_signUp.testEmailLength),
      SignUpPassword(user.signin.user_signUp.testPasswordLength)
    );

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
    CreateTranslationProjectPage.is_projectName_filled_containing_userName(
      userFullName
    );
    cy.type_target_language(user.targetLanguages[2]);
    cy.click_proceed_button();
    QuickStartPage.is_quick_start_step_1_completed();
    QuickStartPage.click_close_dialog();
    cy.is_firstProjectName_displayed(userFullName);
    cy.click_localise();

    cy.is_page_loaded_successfully(`projects`);
    cy.is_projectsPage_displayed();
    cy.is_first_project_created(userFullName, user.targetLanguages[2]);
    cy.is_only_one_single_project_created();
  });

  it(`The user should be able to add nth project`, function () {
    cy.task(`log`, `${environment}.json`);

    const projectName = userProjectName();

    LoginPage.is_loginPage_displayed_successfully();
    cy.login_with_email_and_password(
      user.signin.user_1.testEmail,
      user.signin.user_1.testPassword
    );
    cy.is_loggedIn_successfully(`login`);

    ProjectsPage.is_only_one_project_exist();
    ProjectsPage.is_newProject_button_displayed();
    ProjectsPage.click_newProject_button();

    AddProjectPage.is_addProject_page_displayed();
    AddProjectPage.is_create_selected();
    AddProjectPage.is_projectNameTitle_displayed_with_nameBox();
    AddProjectPage.type_name_of_project(projectName);
    cy.type_target_language(user.targetLanguages[1]);
    cy.click_proceed_button();

    cy.is_page_loaded_successfully(`view=multi`);
    cy.is_projectName_displayed_on_editorPage(projectName);
    cy.click_localise();

    cy.is_page_loaded_successfully(`projects`);
    cy.is_projectsPage_displayed();
    ProjectsPage.is_projectName_displayed_on_projectPage(projectName);
    ProjectsPage.is_more_than_one_project_displayed_on_projectPage();
    ProjectsPage.check_projects_order_and_count(user.projectList, projectName);

    ProjectsPage.is_more_button_displayed();
    ProjectsPage.click_more_button();
    ProjectsPage.is_last_more_button_popUp_displayed();
    ProjectsPage.click_last_more_button_popUp();

    //Delete lastly added project
    cy.is_page_loaded_successfully(`settings`);
    ProjectMorePage.is_morePage_displayed();
    ProjectMorePage.is_settings_selected();
    ProjectMorePage.is_delete_button_displayed_for_the_project(projectName);
    ProjectMorePage.click_delete_button_for_the_project(projectName);
    ProjectMorePage.is_confirm_delete_popUp_displayed(projectName);
    ProjectMorePage.is_confirm_projectName_box_displayed();
    ProjectMorePage.type_projectName_to_confirm_delete(projectName);
    ProjectMorePage.click_delete_button();

    cy.is_page_loaded_successfully(`projects`);
    ProjectsPage.is_project_deleted_alert_displayed();
    ProjectsPage.is_only_one_project_exist();
  });

  it(`The user should be able to add first key`, function () {
    cy.task(`log`, `${environment}.json`);

    LoginPage.is_loginPage_displayed_successfully();
    cy.login_with_email_and_password(
      user.signin.user_2.testEmail,
      user.signin.user_2.testPassword
    );
    cy.is_loggedIn_successfully(`login`);

    ProjectsPage.is_only_one_project_exist();
    ProjectsPage.is_first_project_has_no_keyValue();
    ProjectsPage.click_project_title(user.signin.user_2.projectList[0]);

    cy.is_page_loaded_successfully(`view=multi`);
    cy.is_projectName_displayed_on_editorPage(
      user.signin.user_2.projectList[0]
    );
    EditorPage.is_editorPage_displayed();
    EditorPage.is_addKey_button_displayed();
    EditorPage.click_addKey_button();

    EditorPage.is_key_editor_displayed();
    EditorPage.is_general_selected();
    EditorPage.is_key_input_box_displayed();
    EditorPage.type_a_key(user.signin.user_2.keyName);
    EditorPage.is_platform_box_displayed();
    EditorPage.type_a_platform(user.signin.user_2.platform);
    EditorPage.select_first_platform();
    EditorPage.is_save_button_displayed();
    EditorPage.click_save_button();

    cy.is_page_loaded_successfully(`view=multi`);

    //delete key
    EditorPage.is_count_of_key_correct_as_one(user.signin.user_2.keyName);
    EditorPage.is_delete_key_button_displayed();
    EditorPage.click_delete_key_button();
    EditorPage.is_delete_key_popUp_displayed(user.signin.user_2.keyName);
    EditorPage.click_delete_key_button_on_popUp();
    cy.is_projectName_displayed_on_editorPage(
      user.signin.user_2.projectList[0]
    );
    EditorPage.is_editorPage_displayed();
    EditorPage.is_addKey_button_displayed();
  });

  it(`The user should be able to add translation for plain key`, function () {
    cy.task(`log`, `${environment}.json`);

    LoginPage.is_loginPage_displayed_successfully();
    cy.login_with_email_and_password(
      user.signin.user_3.testEmail,
      user.signin.user_3.testPassword
    );
    cy.is_loggedIn_successfully(`login`);

    ProjectsPage.is_only_one_project_exist();
    ProjectsPage.is_first_project_has_keyValue(1);
    ProjectsPage.click_project_title(user.signin.user_3.projectList[0]);

    cy.is_page_loaded_successfully(`view=multi`);
    cy.is_projectName_displayed_on_editorPage(
      user.signin.user_3.projectList[0]
    );
    EditorPage.is_count_of_key_correct_as_one(user.signin.user_3.keyName);
    EditorPage.is_base_words_count_of(0);
    EditorPage.is_project_base_language_displayed(
      user.signin.user_3.keyName,
      user.signin.user_3.projectBaseLanguage
    );
    EditorPage.is_project_target_language_displayed(
      user.signin.user_3.keyName,
      user.signin.user_3.projectTargetLanguage
    );
    EditorPage.is_the_key_empty(user.signin.user_3.keyName);

    for (let i = 0; i < user.signin.user_3.keyValueList.length; i++) {
      EditorPage.click_empty_text_with_indexOf(0, user.signin.user_3.keyName);
      EditorPage.type_translation_for_base_language(
        user.signin.user_3.keyName,
        user.signin.user_3.keyValueList[i]
      );
      EditorPage.click_to_save_translation();
      EditorPage.is_typed_translation_displayed(
        user.signin.user_3.keyValueList[i]
      );
    }
    EditorPage.is_base_words_count_of(1);

    //Delete
    for (let i = 0; i < user.signin.user_3.keyValueList.length; i++) {
      EditorPage.is_typed_translation_displayed(
        user.signin.user_3.keyValueList[i]
      );
      EditorPage.click_base_language_value(
        user.signin.user_3.keyName,
        user.signin.user_3.keyValueList[i]
      );
      EditorPage.clear_translation(user.signin.user_3.keyName);
      EditorPage.click_to_save_translation();
      EditorPage.is_the_key_empty_indexOf(0, user.signin.user_3.keyName);
    }

    EditorPage.is_base_words_count_of(0);
    EditorPage.is_the_key_empty(user.signin.user_3.keyName);
  });

  it(`The user should be able to add translation for plural key`, function () {
    cy.task(`log`, `${environment}.json`);

    LoginPage.is_loginPage_displayed_successfully();
    cy.login_with_email_and_password(
      user.signin.user_4.testEmail,
      user.signin.user_4.testPassword
    );
    cy.is_loggedIn_successfully(`login`);

    ProjectsPage.is_only_one_project_exist();
    ProjectsPage.is_first_project_has_keyValue(1);
    ProjectsPage.click_project_title(user.signin.user_4.projectList[0]);

    cy.is_page_loaded_successfully(`view=multi`);
    cy.is_projectName_displayed_on_editorPage(
      user.signin.user_4.projectList[0]
    );
    EditorPage.is_count_of_key_correct_as_one(user.signin.user_4.keyName);

    EditorPage.is_plural_icon_displayed();
    EditorPage.is_project_base_language_displayed(
      user.signin.user_4.keyName,
      user.signin.user_4.projectBaseLanguage
    );
    EditorPage.is_project_target_language_displayed(
      user.signin.user_4.keyName,
      user.signin.user_4.projectTargetLanguage
    );
    EditorPage.is_plural_key_fields_displayed(
      user.signin.user_4.keyName,
      user.signin.user_4.plurallabelList
    );
    EditorPage.is_the_plural_key_empty(user.signin.user_4.keyName);
    EditorPage.is_base_words_count_of(0);

    for (let i = 0; i < user.signin.user_4.pluralKeyValueList.length; i++) {
      EditorPage.click_empty_text_with_indexOf(0, user.signin.user_4.keyName);
      EditorPage.is_plural_popUp_displayed();
      EditorPage.type_plural_popUp_input(
        user.signin.user_4.pluralKeyValueList[i]
      );
      EditorPage.click_to_save_translation();
      EditorPage.is_typed_translation_displayed(
        user.signin.user_4.pluralKeyValueList[i]
      );
    }
    EditorPage.is_base_words_count_of(2);

    for (let i = 0; i < user.signin.user_4.pluralKeyValueList.length; i++) {
      EditorPage.is_typed_translation_displayed(
        user.signin.user_4.pluralKeyValueList[i]
      );
      EditorPage.click_base_language_value(
        user.signin.user_4.keyName,
        user.signin.user_4.pluralKeyValueList[i]
      );
      cy.wait(500);
      EditorPage.clear_translation();
      EditorPage.click_to_save_translation();
      EditorPage.is_the_key_empty_indexOf(0, user.signin.user_4.keyName);
    }
  });
});
