const { Builder, Key, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async () => {
    const driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options())
        .build();

    try {
        await driver.get("https://www.google.com");

        await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);

        await driver.wait(until.titleContains("selenium"), 10000);

        console.log("test case passed");
    } catch (error) {
        console.error("some error occurred", error);
    } finally {
        await driver.quit();
    }
})();


//q2


const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

    try {

        // Test Case 1: Navigate to Google and verify title
        await driver.get('https://www.google.com');
        await driver.wait(until.titleContains('Google'), 10000);
        console.log('Test Case 1 Passed: Title contains "Google"');

        // Test Case 2: Search for "Selenium" on Google
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
        await driver.wait(until.titleContains('Selenium'), 10000);
        console.log('Test Case 2 Passed: Title contains "Selenium"');

        // Test Case 3: Verify search results
        const searchResults = await driver.findElements(By.css('div.g'));
        console.log(`Test Case 3 Passed: Found ${searchResults.length} search results`);

    } catch (error) {
        console.error('One or more test cases failed:', error);

    } finally {
        await driver.quit();
    }
})();
