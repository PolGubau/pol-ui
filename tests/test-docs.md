Test are used to check our functionalities, each Component has a test in it's folder. In test folder you can find the 'e2e' folder, which contains the end to end tests. These tests are used to check the whole application, from the user's perspective. The tests are written in typescript and use the Cypress framework. The tests are run by the CI/CD pipeline, and the results are displayed in the pipeline's logs.

How this is just a library, the is not a complete e2e test, but we will use them for complex components, like the table.
Example:

- Unit test for testing the cells, the sorting functionality etc, a more detailed and low level test.
- E2E test for testing the whole table, with all the functionalities, including the sorting, filtering, pagination etc but always from a user's perspective.
