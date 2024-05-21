import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  tls: {
    ciphers: "SSLv3",
  },
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "tourismtojapan@gmail.com",
    pass: "lblk ncud jmzg goha",
  },
});

export async function sendBooking(template, email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "tourismtojapan@gmail.com",
    to: `${email} , tourismtojapan@gmail.com,hassanali.naeem9811@gmail.com`, // list of receivers
    subject: "Booking from tourism", // Subject line
    text: "", // plain text body
    html: `${template}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
