const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const request = require("request");
var https = require('https');
var fs = require('fs');

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  host: "mail.mail.com",
  port: 465,
  secure: true,
  auth: {
    user: "user@test.com",
    pass: "TestPassword123",
  }
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`Server is ready to receive messages: ${success}`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: "test@gmail.com",
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("Message Sent");
      res.json({
        status: "success",
      });
    }
  });
});

const port = 3001;

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log("Server is running at port 3001");
  });

app.get('/', (req, res) => {
  res.send("Hello from express server.")
})