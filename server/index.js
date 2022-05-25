const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // your email address to send email from
    pass: process.env.PASSWORD // your gmail account password
  }
});

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.post('/send', (req, res) => {
  try {
    const  mailOptions ={
      from: process.env.EMAIL,
      to: process.env.RECIPIENT,
      subject: `Заявка от ${req.body.userPhone}`,
      html: `
      <center>
      <h2>
      Заявка на обратный звонок
      </h2>
      </center>
      <ul>
        <li>Номер телефона: ${req.body.userPhone}</li>
        <li>Количество людей в домовладении: ${req.body.people}</li>
        <li>Глубина канализации: ${req.body.wasteDepth}</li>
        <li>Уровень залегания грунтовых вод: ${req.body.waterLevel}</li>
        <li>Эксплуатация зимой: ${req.body.winterHouse}</li>
        <li>Количество водопотребителей в доме: ${req.body.consumerDevices}</li>
      </ul>      
      `
    };
    transporter.sendMail(mailOptions, function(err,info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: `Произошла ошибка, попробуйте повторить позднее. \n ${err}`
        });
      } else {
        res.send({
          success: true,
          message: 'Ваша заявка принята. Мы скоро свяжемся с вами!'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Произошла ошибка, попробуйте повторить позднее. \n ${error}`
    })
  }
});

app.listen(5000, () => {
  console.log('server start on port 5000');
});