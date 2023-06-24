/* eslint-disable import/no-extraneous-dependencies */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:5000',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'katalog-resto',
  plugins: {
    retryFailedStep: {
      enable: true,
    },
    screenshotOnFail: {
      enable: true,
    },
  },
};
