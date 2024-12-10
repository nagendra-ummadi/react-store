const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'nagendra.u208@gmail.com',
        pass: 'nag@chetan1523'
    }
});

var mailOptions = {
    from: "nagendra.u208@gmail.com",
    to: "nagendraummadi1524@gmail.com",
    subject: "This email is sended by Node.js Server",
    html: "<h1>Welcome to the new World</h1> <p>Hi, This is nagendra,...</p>"
};

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("info",info)
    }
});