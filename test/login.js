require('chromedriver');
var expect = require('chai').expect;
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('login form', (res) => {
    // e2e tests are too slow for default Mocha timeout

    before(function(done) {
        this.timeout(5000);
        driver.navigate().to(' http://localhost:3334/')
            .then(() => done());
    });

    it('autocompletes the name field', function(done) {
        this.timeout(5000);
        driver.findElement(By.name('email')).sendKeys('John');
        //driver.wait(until.elementLocated(By.name('password')).sendKeys('123455655544444'))
        driver.findElement(By.name('password')).sendKeys('123455655544444')
       //driver.findElement(By.name('submit')).click()
            .then(() => done());
    });

    after(function(done) {
         driver.quit()
             .then(() => done())
    });
});
