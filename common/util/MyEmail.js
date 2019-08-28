const imaps = require("imap-simple")

class Email {
    constructor(imapConfig) {
        this.config = {}
        this.config.imap = imapConfig;
    }

    async getBySubject(subject, otp) {
        // imaps.connect(this.config).then(function (connection) {
        //     return connection.openBox('INBOX').then(function() {
        //         var searchCriteria = [
        //             'UNSEEN',
        //             ['SUBJECT', subject]
        //         ];

        //         var fetchOptions = {
        //             bodies: ['HEADER', 'TEXT'],
        //             markSeen: true
        //         };

        //         return connection.search(searchCriteria, fetchOptions).then(function (results) {
        //             var subjects = results.map(function (res) {
        //                 return res.parts.filter(function (part) {
        //                     return part.which === 'HEADER';
        //                 })[0].body.subject[0];
        //             });

                
        //     })
            
        // })

        let connection = await imaps.connect(this.config);

        await connection.openBox('INBOX')
    
        var searchCriteria = [
            'UNSEEN',
            ['SUBJECT', subject]
        ];
    
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };
    
        let results = await connection.search(searchCriteria, fetchOptions);
    
        await connection.end();
        if (results.length == 0) {
            return null;
        } else {
            return results[results.length - 1]; //return the last latest entry
        }
    }
}

module.exports = Email;
