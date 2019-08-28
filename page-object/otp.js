let params = "";

let url = function () {
    return `https://www.amazon.com/ap/cvf/request?'${params}'`;
}

let elements = {
    sendOtp_button: '#continue',
    otp: 'input[name="code"]',
    continue_button: 'input[type="submit"]'
};

let commands = {};

commands['verify'] = function() {
    return this.waitForElementVisible('#cvf-page-content')
}

commands['enterOtp'] = function(value) {
    return this.waitForElementVisible('@otp')
        .setValue('@otp', value)
        .click('@continue_button')
}

module.exports = {
    url: url,
    elements: elements,
    commands: [commands]
};