const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async ({body:{subject, receiver, content}}, res)=>{
    let mail, error;

    if(!subject || !receiver || !content){
        res.sendStatus(400).send({
            message: 'You forgot some import key',
            service: 'Database service',
            status: 400,
            payload: null,
        })
    }

    try {
        mail = await new Mail({
            subject, receiver, content
        }).save();
    } catch (err) {
        error = err;
    }

    res.send({
        message: 'Got response from DB',
        service: 'Database service',
        status: 200,
        payload: mail || error,
    })
}

module.exports = server => {
    server
        .post('/mails', mailHandler)
}