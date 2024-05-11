import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "hassan.ccpd.9811@gmail.com",
    pass: "eoqj vsnx uljv xroy",
  },
});

export async function sendBooking(template, email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "hassanali",
    to: "hassanali.naeem9811@gmail.com", // list of receivers
    subject: "Booking from tourism", // Subject line
    text: "", // plain text body
    html: `${template}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
