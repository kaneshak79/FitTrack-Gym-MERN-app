import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
   service:"gmail",
    auth: {
      user: "kaneshak79@gmail.com" ,     
      pass: "aztg ohkj pnvh pjbu",
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };
  await transporter.sendMail(mailOptions);
  
};