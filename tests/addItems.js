module.exports = {
    'Add items to cart': function(browser) {
        browser
            .url('https://www.amazon.com/BIC-Gel-ocity-Ultra-Retractable-12-Count/dp/B07M5MFSQM')
            .waitForElementVisible('#add-to-cart-button')
            .click('#add-to-cart-button')
            .waitForElementVisible('#attachAddBaseItemSuccessAlert .a-alert-container .a-alert-heading')
            .expect.element('#attachAddBaseItemSuccessAlert .a-alert-container .a-alert-heading').text.to.equal('Added to Cart')
    }
}

