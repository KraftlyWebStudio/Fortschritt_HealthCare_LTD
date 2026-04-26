const { contactSchema } = require("../validators/contact.validator");
const { sendEnquiryEmail } = require("../services/email.service");

/**
 * Handle incoming contact form submissions
 */
const submitContactForm = async (req, res) => {
  try {
    // 1. Validate payload using Zod
    const validationResult = contactSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      });
    }

    const validatedData = validationResult.data;

    // 2. Send email via Nodemailer
    await sendEnquiryEmail(validatedData);

    // 3. Return success response
    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Error in submitContactForm controller:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while sending your enquiry.",
    });
  }
};

module.exports = {
  submitContactForm,
};
