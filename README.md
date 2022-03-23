# lokalise
lokalise Take Home Assignment

For this assignment:

Language          : Javascript
Framework         : Cypress
Design pattern    : POM design
Environment       : stage, live(didnt run)

are used.


To run the task: 

npx eslint ./cypress/integration/WebsiteTests/TakeHomeTask.spec.js



 Folder structure:

├── cypress
    │  ├── fixtures          # holds optional JSON data for mocking
    │  ├── integration       # holds the actual test files
    │  ├── plugins           # allow you to customize how tests are loaded
    │  ├── support           # file runs before all tests and is a great place to write or load additional custom commands
    ├── cypress.json         # cypress configuration file
    ├── .gitignore           # ignore the files to commit


About Assignment:

- The assignment includes 5 tests which run in stage environment,
- The first test is to add the first project. For this, sign up is required and added the test,
- The second test is to add the nth project. Since the requirement was 2nd project should be displayed, "delete lately added project" is added to this test,
- The third test is to add the first key. Since the requirement was the first key should be displayed, "delete lately added key" is added to this test,
- The fourth test is to add translation for plain key. "Delete translation for plain key" is added to this test,
- The fifth test is to add translation for plural key. "Delete translation for plural key" is added to this test.


Some Findings:

- Plain key base language translation box doesnt upload,
- Page loads take about 15 sec sometimes.
