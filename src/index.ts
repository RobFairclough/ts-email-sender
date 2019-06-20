import AWS = require('aws-sdk');

AWS.config.loadFromPath('config.json');
const ses: AWS.SES = new AWS.SES();

const params = {
  Destination: {
    /* required */
    // CcAddresses: [
    //   'EMAIL_ADDRESS',
    //   /* more items */
    // ],
    ToAddresses: [
      'rob@silverchip.com'
      /* more items */
    ]
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: 'UTF-8',
        Data: '<body><h1>Hello, Rob</h1></body>'
      },
      Text: {
        Charset: 'UTF-8',
        Data: 'Got some god damn text in here my dude'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'test test test'
    }
  },
  Source: 'rob@silverchip.com' /* required */
  // ReplyToAddresses: [
  //   'EMAIL_ADDRESS'
  //   /* more items */
  // ]
};
console.log(
  ses.sendEmail(params, (err, data) => {
    if (err) throw err;
    if (data) console.log(data);
  })
);
console.log(AWS);
