const sendmail = (to, subject, data) => {
    console.log("Sending mail to " + to + " with subject " + subject + " and data " + data);
}

module.exports = {
    sendmail
}