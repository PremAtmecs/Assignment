const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b9et14",
  defaultCommandTimeout: 6000,
  env:{
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/example/*.js'
  },
});
