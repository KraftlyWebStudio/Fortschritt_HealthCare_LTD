const nodemailer = require("nodemailer");
const env = require("../configs/env.config");

// Create a reusable transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.CONTACT_EMAIL_USER,
    pass: env.CONTACT_EMAIL_PASS,
  },
});

/**
 * Send an enquiry email
 * @param {Object} data Contact form data
 */
const sendEnquiryEmail = async (data) => {
  const { name, company, email, phone, subject, message } = data;

  const mailOptions = {
    from: `"${name}" <${env.CONTACT_EMAIL_USER}>`,
    replyTo: email,
    to: env.CONTACT_RECIPIENT_EMAIL,
    subject: `New Web Enquiry: ${subject}`,
    text: `
You have received a new enquiry from the website.

Details:
----------------------------------------
Name: ${name}
Company/Hospital: ${company || "N/A"}
Email: ${email}
Phone: ${phone}
Enquiry Type: ${subject}
----------------------------------------

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-w-xl mx-auto border border-gray-200 rounded-lg p-6">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">New Website Enquiry</h2>
        <p>You have received a new enquiry. Details are below:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company/Hospital</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Enquiry Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
          </tr>
        </table>
        
        <h3 style="color: #1e3a8a;">Message</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = {
  sendEnquiryEmail,
};
