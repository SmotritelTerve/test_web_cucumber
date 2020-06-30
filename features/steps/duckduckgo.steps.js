'use strict';
 
const { Given, When, Then } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
 
const assert = require('assert')

const base_url = 'https://www.duckduckgo.com/'

Given('I am on DuckDuckGo', function () {
    return this.driver.get(base_url);
  });

 When('I type in the search engine {string}', async function (stringToSearch) {
    await this.driver.findElement(seleniumWebdriver.By.name('q')).sendKeys(stringToSearch);
  });

 When('I click Submit', async function () {
    await this.driver.findElement(seleniumWebdriver.By.id('search_button_homepage')).click();
  });

 Then('I should see link with {string} text', function (stringToVerify) {
    // this.driver.sleep(1000);
    const isDisplayed = this.driver.findElements(seleniumWebdriver.By.linkText(stringToVerify)).then(found => !!found.length);
    // const until = webdriver.until;
    // const isDisplayed = this.driver.findElements(seleniumWebdriver.By.linkText(stringToVerify)), 1000);
    assert.ok(isDisplayed);
  });
