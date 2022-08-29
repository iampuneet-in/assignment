const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v1sfaf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
