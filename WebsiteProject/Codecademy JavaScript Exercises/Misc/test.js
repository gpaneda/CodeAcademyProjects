const webdriver = require('selenium-webdriver');

const browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).build();

browser.get('http://www.google.com');

const promise = browser.getTitle();


promise.then(function (title) {
    console.log(title);
});

browser.quit();
