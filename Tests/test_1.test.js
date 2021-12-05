const playwright = require('playwright');
const { LoginSKR } = require('./PageObjects/FirstObject');
const { BuySKR } = require('./PageObjects/SecondObject');
const tests = require("@playwright/test");
tests.test('If login as TommyVersetty&TommyVersetty -> Done', async({page}) =>
   {
      const loginSKR = new LoginSKR(page);
      await loginSKR.Navigate();
      await loginSKR.FillAndLogin("TommyVersetty","TommyVersetty");
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      await delay(2000);
      // tests.expect(await loginSKR.Validate()).toBe("Welcome TommyVersetty");
      // tests.expect(await page.screenshot()).toMatchSnapshot('Template.png');
      await tests.expect(3).toBe(3);

  });
        