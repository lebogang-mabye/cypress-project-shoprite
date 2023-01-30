const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  responseTimeout: 30000,
  viewportHeight: 960,
  viewportWidth: 1280,
  watchForFileChanges: false,
  video: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.shoprite.co.za/',
  },
});
