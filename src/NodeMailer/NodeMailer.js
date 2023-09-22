const express = require("express")
const router = express.Router();
const cors = require("cors");
const nodemailer = require('nodemailer');
const { default: Contact } = require("../Contact/Contact");


//
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.user)
console.log(process.env.pass)



// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email address
    pass: 'your-email-password', // replace with your email password
  },
});

// Define the email options
const mailOptions = {
  from: 'your-email@gmail.com', // replace with your email address
  to: 'recipient-email@example.com', // replace with the recipient's email address
  subject: 'Test Email',
  text: 'This is a test email using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName
    const email = req.body.email
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: "mina.ashraf2024@gmail.com",
        subject: "Contact From Submission - Portofolio",
        html: `<p>Name : ${name}</p>
                <p>Email : ${email}</p>
                <p>Phone : ${phone}</p>
                <p>Message : ${message}</p>`

    }
})



