const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom =  new JSDOM('------=_Part_575979_2074258706.1566892852776\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: 7bit\r\n\r\n\r\n  <html xmlns="http://www.w3.org/1999/xhtml">\r\n  <head>\r\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\r\n    <style type="text/css">\r\nbody {\r\n    margin:0;\r\n    color:#333;\r\n}\r\n\r\na {\r\n    text-decoration:none;\r\n    color:#006699;\r\n}\r\n\r\np {\r\n    margin:0px;\r\n}\r\n\r\nimg {\r\n    border:0;\r\n    margin:0;\r\n}\r\n\r\n/* container */\r\n#container {\r\n    width:540px;\r\n    margin:0 auto;\r\n}\r\n\r\n#content {\r\n    width:500px;\r\n    margin:0 20px;\r\n}\r\n\r\n/* header */\r\n#header {\r\n    border-bottom:1px solid #eaeaea;\r\n    padding-top:10px;\r\n    padding-left:0px;\r\n    padding-right:0px;\r\n    padding-bottom:10px;\r\n}\r\n\r\n#title p{\r\n    font-size:20px;\r\n    font-family: "arial", "sans-serif";\r\n}\r\n\r\n#amazonLogo{\r\n    width:107px;\r\n    height:31px;\r\n}\r\n\r\n/* verification msg */\r\n#verificationMsg {\r\n    padding-left:0;\r\n    padding-top:9px;\r\n    padding-bottom:9px;\r\n}\r\n\r\n#verificationMsg p {\r\n    font-size:14px;\r\n    font-family: "arial", "sans-serif";\r\n}\r\n\r\n#verificationMsg .otp {\r\n    font-size:18px;\r\n    font-weight:bold;\r\n    padding-top:18px;\r\n}\r\n\r\n/* account security */\r\n#accountSecurity {\r\n    padding-left:0;\r\n    padding-top:9px;\r\n    padding-bottom:9px;\r\n}\r\n\r\n#accountSecurity p {\r\n    font-size:14px;\r\n    font-family: "arial", "sans-serif";\r\n}\r\n\r\n/* closing */\r\n#closing {\r\n    padding-left:0;\r\n    padding-top:9px;\r\n    padding-bottom:9px;\r\n}\r\n\r\n#closing p {\r\n    font-size:14px;\r\n    font-family: "arial", "sans-serif";\r\n}\r\n\r\n    </style>\r\n    <title></title>\r\n  </head>\r\n  <body><img width="1" height="1" src="https://www.amazon.com/gp/r.html?C=15CKPC2VPXGHR&M=urn:rtn:msg:20190827080052e77708f893614a32ae509df71620p0na&R=39IGR56YUXKVQ&T=O&U=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=CDR4UQ7OIBXD6JAYYBPDZ5VF1WAA&ref_=pe_3594880_270805940_opens" />\r\n  <table align="center" cellspacing="0" id="container" cellpadding="0">\r\n    <tbody>\r\n    <tr>\r\n      <td>\r\n        <table cellspacing="0" id="content" cellpadding="0">\r\n          <tbody>\r\n          <tr>\r\n            <td id="header">\r\n              <table cellspacing="0" cellpadding="0">\r\n                <tbody>\r\n                <tr>\r\n                  <td width="250" id="logo">\r\n<img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/te/logo._CB152417367_.png" id="amazonLogo"/>                  </td>\r\n                  <td width="250" id="title" valign="top" align="right"><p></p></td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td id="verificationMsg">\r\n              <p>To authenticate, please use the following One Time Password (OTP):</p>\r\n              <p class="otp">352863</p>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td id="accountSecurity">\r\n              <p>Do not share this OTP with anyone. Amazon takes your account security very seriously. Amazon Customer Service will never ask you to disclose or verify your Amazon password, OTP, credit card, or banking account number. If you receive a suspicious email with a link to update your account information, do not click on the link--instead, report the email to Amazon for investigation.\r\n\r\nWe hope to see you again soon.\r\n              </p>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td id="closing">\r\n              <p>Thanks for visiting Amazon!\r\n              </p>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <img width="1" height="1" src="https://www.amazon.com/gp/r.html?C=15CKPC2VPXGHR&M=urn:rtn:msg:20190827080052e77708f893614a32ae509df71620p0na&R=15FK37N2MC76Y&T=E&U=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=OAVRSFG87THQFYFOMYZAPRJBXOGA&ref_=pe_3594880_270805940_open" /></body>\r\n  </html>\r\n\r\n------=_Part_575979_2074258706.1566892852776--\r\n')

console.log(dom.window.document.querySelector(".otp").textContent)