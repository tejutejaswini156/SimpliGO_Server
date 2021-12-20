const db = require("../models");
const User = db.userTable;
const Op = db.Sequelize.Op;
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("../details.json");

exports.create = (req, res) => {
 const user={
        useremail:req.body.useremail,
                username:req.body.username,
                userphoneno:req.body.userphoneno,
                password:req.body.password
};  
    
    User.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Creating cart",
        });
      });
  };
  exports.findAll = (req, res) => {
    console.log("Get All Cart")
    User.findAll().then(data => {
      console.log(data);
      res.send(data)
    }).catch(err => {
      console.error("There is an error getting data from db: " + err);
      res.send(err);
    })
    
  };
      
  exports.createmail = (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has sent and the id is ${info.messageId}`);
    res.send(info);
  });

}

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Thanks for registering with SimpliGO", // Subject line
    html: `<h1>Hi ${user.name}</h1><br>
    <h3>Thanks for joining us</h3>
    <h2>Lets<b> GO </b>with<b> SimpliGO</b><br>
    <h3>Top Brands For Electronics ,Latest Trends In Fashion at Best Prices.</h3>
    <h4>Enjoy Shopping</h4>
  
        `
    
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
   
}