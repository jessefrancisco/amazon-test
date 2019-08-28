const credential = require('../common/config/credential');
// const resource = require('../common/config/resource')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// let getEmailOtp = async function() {
//     const MyEmail = require('../common/util/MyEmail')
//     let email = new MyEmail(resource.email)

//     let content = await email.getBySubject('Amazon Authentication')
//     console.log(content)
//     let body = content.parts.filter(part => {
//         return part.which === 'TEXT'
//     })[0].body

//     const dom = new JSDOM(body)
//     return dom.window.document.querySelector(".otp").textContent
//     // return 0;
// }


module.exports = {
    'Login with correct email and password': async function(browser) {
        let signInPage = browser.page.signIn()

        signInPage
            .navigate()
            .setCookie({
                name: 'aws-account-alias',
                value: 'awshatchcosmos',
                domain: '.amazon.com',
                httpOnly: true,
                hostonly: true,
            })
            .setCookie({
                name: 'aws-userInfo',
                value: '%7B%22arn%22%3A%22arn%3Aaws%3Aiam%3A%3A370928533415%3Auser%2Fjdfrancisco%22%2C%22alias%22%3A%22awshatchcosmos%22%2C%22username%22%3A%22jdfrancisco%22%2C%22keybase%22%3A%22%22%2C%22issuer%22%3A%22http%3A%2F%2Fsignin.aws.amazon.com%2Fsignin%22%7D',
                domain: '.amazon.com',
                httpOnly: false,
                hostonly: true,
            })
            .setCookie({
                name: 'aws-ubid-main',
                value: '760-4343573-4873876',
                domain: '.amazon.com',
                httpOnly: true,
                hostonly: true,
            })
            .setCookie({
                name: 'sp-cdn',
                value: '"L5Z9:PH"',
                domain: '.amazon.com',
                httpOnly: true,
                hostonly: true,
            })
            .setCookie({
                    name: 'sst-main',
                    value: 'Sst1|PQG8n9Fgwy-DLdhWWjMPf93WC97DfJDtydORoDoi1e-_lSL4NKicTuN9977Nx0V4qSTFoz6rChevv148_35etYZx3JEVfaXjF8gamS8ocwkuTImOrxFEs-deQEHtIgPRvQ7zbFCwDBLMgRRBYdTZ5oVZ8P_OBVrzGQJFS8HrRe_76Zv_6ZXF-JodK3nJjc5QDswUiYT1biMtc8F3ROhGQ7LaGIOGvLnVcM8PDbtZCVnjxaZ9n_80Dnw40pAaj0EfAsVNzDKagZ5cu7UzoZWfvEqjICHAViNL2Cbf3_DdoXeKaUaoFwFT1tbGdnmYHpokghvIhqODqa0UbPhsJSXyf_QJqQ',
                    domain: '.amazon.com',
                    httpOnly: true,
                    hostonly: true,
                })
            .waitForElementVisible('@email')
            .setValue('@email', credential.email)
            .click('@continue')
            .waitForElementVisible('@password')
            .setValue('@password', credential.password)
            .click('@signIn')
        
        let otpPage = browser.page.otp()
        otpPage.verify()
            .click('@sendOtp_button')
            .waitForElementVisible('@otp')
            .pause(20000, async function() {
                // let otp = await getEmailOtp();
                // otpPage.enterOtp(otp)

                let loggedIn = browser.page.loggedIn()
                loggedIn.expect.element('@accountName').text.to.equal('Hello, QeTest')
            }) //wait for the email to be received
    }
}