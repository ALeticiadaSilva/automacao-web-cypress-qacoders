const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automacao.qacoders-academy.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
