let url = function () {
    return 'http://www.amazon.com'
}

let elements = {
    signIn: "#nav-link-accountList",
};

let commands = {};

commands["clickSignIn"] = function() {
    this.waitForElementVisible('@signIn')
        .click('@signIn')
}

module.exports = {
    url: url,
    elements: elements,
    commands: [commands]
};