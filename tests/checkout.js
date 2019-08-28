const credential = require('../common/config/credential')

module.exports = {
    'Proceed to Checkout': function(browser) {
        browser
            .waitForElementVisible('#attach-sidesheet-checkout-button')
            .click('#attach-sidesheet-checkout-button')
            .waitForElementVisible('#enterAddressFullName')
            .expect.element('#enterAddressFullName').text.to.equal(credential.username)
    }
}